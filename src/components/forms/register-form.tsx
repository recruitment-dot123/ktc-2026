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

type IRegisterForm = z.infer<typeof
