"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

// import { doc } from "@/lib/spreadsheet";
import {
  REFERRAL_OPTIONS,
  registerFormSchema,
  RegisterPostData,
} from "@/lib/schemas";
import { useUploadThing } from "@/utils/uploadthing";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CVDropzone from "../cv-dropzone";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import FormFieldInput from "./form-fields/form-field-input";
import FormItemWrapper from "./form-fields/form-item-wrapper";

type IRegisterForm = z.infer<typeof registerFormSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const { startUpload, isUploading } = useUploadThing("pdfUploader", {
    // onClientUploadComplete: () => {
    //   alert("uploaded successfully!");
    // },
    onUploadError: () => {
      // Toast error
      alert("error occurred while uploading");
    },
  });
  const form = useForm<IRegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience_years: 0,
      major: "",
      referral_source: "",
      agree: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterPostData) =>
      axios.post("/api/register-form", data),
    onSuccess: () => {
      router.push("/cam-on");
    },
  });

  async function onSubmit(values: IRegisterForm) {
    // Track Facebook Pixel
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "SubmitApplication");
    }

    const { cv_file, ...restData } = values;
    if (!cv_file) {
      mutate(restData);
      return;
    }
    const selectedFiles = new Array(cv_file);
    const result = await startUpload(selectedFiles);
    if (result) {
      const data = { ...restData, cv_url: result[0].url };
      mutate(data);
    }
  }

  const isSubmitting = form.formState.isSubmitting || isPending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormFieldInput
          name="name"
          label="Họ và tên"
          placeholder="Nguyễn Văn A"
          isSubmitting={isSubmitting}
          form={form}
          required
        />
        <FormFieldInput
          name="phone"
          label="Số điện thoại"
          placeholder="0xxxxxxxxx"
          isSubmitting={isSubmitting}
          form={form}
          required
        />
        <FormFieldInput
          name="email"
          label="Email"
          placeholder="abc@gmail.com"
          isSubmitting={isSubmitting}
          form={form}
          required
        />
        <FormField
          control={form.control}
          name="referral_source"
          render={({ field }) => (
            <FormItemWrapper label="Bạn biết đến chương trình qua" required>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value?.toString()}
                className="flex flex-col space-y-1"
                disabled={isSubmitting}
              >
                {REFERRAL_OPTIONS.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormItemWrapper>
          )}
        />
        <FormFieldInput
          name="experience_years"
          label="Số năm kinh nghiệm"
          placeholder="0"
          type="number"
          isSubmitting={isSubmitting}
          form={form}
          required
        />

        <FormFieldInput
          name="major"
          label="Vị trí hiện tại"
          placeholder="Công nghệ thông tin"
          isSubmitting={isSubmitting}
          form={form}
          required
        />

        <FormField
          control={form.control}
          name="cv_file"
          render={({ field }) => (
            <FormItemWrapper label="Tải lên CV (Định dạng PDF)">
              <CVDropzone
                disabled={isSubmitting}
                onChange={(files) => {
                  field.onChange(files[0]);
                }}
              />
            </FormItemWrapper>
          )}
        />

        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked: boolean) => {
                      field.onChange(checked);
                    }}
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  Tôi đã đọc và đồng ý với{" "}
                  <Link
                    href="/chinh-sach-bao-mat"
                    className="font-bold text-pink-600"
                    target="_blank"
                  >
                    Chính sách bảo mật{" "}
                  </Link>
                  của chương trình
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isUploading
            ? "Vui lòng đợi trong giây lát.. "
            : isPending
            ? "Dữ liệu đang được xử lí..."
            : "Ứng tuyển ngay"}
        </Button>
      </form>
    </Form>
  );
}
