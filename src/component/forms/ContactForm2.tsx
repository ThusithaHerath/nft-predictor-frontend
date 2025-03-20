"use client"
import { useRef } from 'react';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   Category: string;
   Roadmap_Strength: number;
   Social_Media_Sentiment: number;
   Whitelist_Count: number;
}

const schema = yup
   .object({
      Category: yup.string().required().label("Category"),
      Roadmap_Strength: yup
         .number()
         .typeError('Roadmap Strength must be a number')
         .required('Roadmap Strength is required'),
      Social_Media_Sentiment: yup
         .number()
         .typeError('Social Media Sentiment must be a number')
         .required('Social Media Sentiment is required'),
      Whitelist_Count: yup
         .number()
         .typeError('Whitelist Count must be a number')
         .required('Whitelist Count is required'),
   })
   .required();


const ContactForm2 = () => {

   const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const predictSuccess = async (data: FormData) => {
    try {
        const requestBody = {
            collection_type: "new",
            Category: data.Category,
            Roadmap_Strength: Number(data.Roadmap_Strength),  // Convert string to number
            Social_Media_Sentiment: Number(data.Social_Media_Sentiment),  // Convert to number
            Whitelist_Count: Number(data.Whitelist_Count)  // Convert to number
        };

        console.log("Sending data:", requestBody);  // Debug log

        const response = await fetch("https://nft-predictor-ib27.onrender.com/predict-nft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        const result = await response.json();
        console.log("API Response:", result);  // Log response

        if (response.ok) {
            toast.success(`Prediction Success: ${result.success_probability}`, { position: "top-center" });
        } else {
            toast.error(`Error: ${result.error}`, { position: "top-center" });
        }
    } catch (error) {
        console.error("API request failed:", error);
        toast.error("Failed to fetch prediction", { position: "top-center" });
    }
};


   return (
      <form ref={form} onSubmit={handleSubmit(predictSuccess)}>
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" {...register("Category")} name="Category" placeholder="Category" />
                  <p className="form_error">{errors.Category?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="number" {...register("Roadmap_Strength")} name="Roadmap_Strength" placeholder="Roadmap Strength" />
                  <p className="form_error">{errors.Roadmap_Strength?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
               <input 
              type="number" 
              step="0.1" 
              {...register("Social_Media_Sentiment")} 
              placeholder="Social Media Sentiment (0-1)" 
            />
            <p className="form_error">{errors.Social_Media_Sentiment?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="number" {...register("Whitelist_Count")} name="Whitelist_Count" placeholder="Whitelist count" />
                  <p className="form_error">{errors.Whitelist_Count?.message}</p>
               </div>
            </div>
         </div>
         <button type="submit" value="Send" className="btn">Predict Success</button>
      </form>
   );
};

export default ContactForm2;