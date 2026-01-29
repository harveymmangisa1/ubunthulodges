import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry, type InquiryResponse } from "@shared/routes";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate data before sending (client-side validation matching shared schema)
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await apiRequest(
        api.inquiries.create.method,
        api.inquiries.create.path,
        validated
      );
      
      return res.json() as Promise<InquiryResponse>;
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for contacting Ubunthu Lodge. Our team will be in touch shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please check your internet connection and try again.",
        variant: "destructive",
      });
    },
  });
}
