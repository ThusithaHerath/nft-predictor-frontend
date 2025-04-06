"use client"
import { useRef,useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface ExistingCollectionForm {
   Volume: number;
   Sales: number;
   Owners: number;
   Average_Price: number;
}

interface NewCollectionForm {
   Category: string;
   Roadmap_Strength: number;
   Social_Media_Sentiment: number;
   Whitelist_Count: number;
}


const existingCollectionSchema = yup.object({
   Volume: yup
     .number()
     .typeError("Volume must be a number")
     .required("Volume is required"),
   Sales: yup
     .number()
     .typeError("Sales must be a number")
     .required("Sales is required"),
   Owners: yup
     .number()
     .typeError("Owners must be a number")
     .required("Owners is required"),
   Average_Price: yup
     .number()
     .typeError("Average Price must be a number")
     .required("Average Price is required"),
 });
 
 const newCollectionSchema = yup.object({
   Category: yup.string().required("Category is required"),
   Roadmap_Strength: yup
     .number()
     .typeError("Roadmap Strength must be a number")
     .required("Roadmap Strength is required"),
   Social_Media_Sentiment: yup
     .number()
     .typeError("Social Media Sentiment must be a number")
     .required("Social Media Sentiment is required"),
   Whitelist_Count: yup
     .number()
     .typeError("Whitelist Count must be a number")
     .required("Whitelist Count is required"),
 });
 interface LocationSuccessRate {
   latitude: number;
   longitude: number;
   location: string;
   success_rate: string;
}

interface PredictionResponse {
   success_probability: string;
   risk_level: string;
   location_success_rates: LocationSuccessRate[];
   recommended_marketing_strategies: string[];
   strategy_explanation: string[];
}

 interface ContactForm2Props {
   setPredictionData: React.Dispatch<React.SetStateAction<PredictionResponse | null>>;
}

   const ContactForm2 = ({ setPredictionData }: ContactForm2Props) => {
      const [activeTab, setActiveTab] = useState<"existing" | "new">("existing");
  // Separate useForm instances
  const existingFormMethods = useForm<ExistingCollectionForm>({
   resolver: yupResolver(existingCollectionSchema),
 });

 const newFormMethods = useForm<NewCollectionForm>({
   resolver: yupResolver(newCollectionSchema),
 });

 const [isLoading, setIsLoading] = useState(false);

 // Select the correct form methods dynamically
 const {
   handleSubmit,
   formState: { },
 } = activeTab === "new" ? newFormMethods : existingFormMethods;

      const form = useRef<HTMLFormElement>(null);
    
      const predictSuccess = async (data: ExistingCollectionForm | NewCollectionForm) => {
        try {
          setIsLoading(true); // Start spinner
          let requestBody;
      
          if (activeTab === "new") {
            requestBody = {
              collection_type: "new",
              ...(data as NewCollectionForm),
            };
          } else {
            requestBody = {
              collection_type: "existing",
              ...(data as ExistingCollectionForm),
            };
          }
      
          const response = await fetch("https://nft-predictor-ib27.onrender.com/predict-nft", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
          });
      
          const result = await response.json();
          console.log(result);
      
          if (response.ok) {
            toast.success(`Prediction Success: ${result.success_probability}`, {
              position: "top-center",
            });
            setPredictionData(result);
          } else {
            toast.error(`Error: ${result.error}`, { position: "top-center" });
          }
        } catch (error) {
          console.error("API request failed:", error);
          toast.error("Failed to fetch prediction", { position: "top-center" });
        } finally {
          setIsLoading(false); // Stop spinner
        }
      };
      
    
      return (
        <div>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "existing" ? "active" : ""}`}
                onClick={() => setActiveTab("existing")}
              >
                Existing Collection
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "new" ? "active" : ""}`}
                onClick={() => setActiveTab("new")}
              >
                New Collection
              </button>
            </li>
          </ul>
    
          <div className="tab-content mt-3">
            {/* Existing Collection Form */}
            {activeTab === "existing" && (
              <div className="tab-pane fade show active">
                <form ref={form} onSubmit={handleSubmit(predictSuccess)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Volume</label>
                      <input type="number"   max="15000"
                      {...existingFormMethods.register("Volume")} placeholder="Volume" />
                      <p className="form_error">{existingFormMethods.formState.errors.Volume?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Sales</label>
                      <input type="number"   min="0" 
  max="3000" {...existingFormMethods.register("Sales")} placeholder="Sales (Up to 20000)" />
                      <p className="form_error">{existingFormMethods.formState.errors.Sales?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Owners</label>
                      <input type="number"  min="0"  {...existingFormMethods.register("Owners")} placeholder="Owners" />
                      <p className="form_error">{existingFormMethods.formState.errors.Owners?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Average Price</label>
                      <input type="number" min="0" max="10" step="0.1" {...existingFormMethods.register("Average_Price")} placeholder="Average Price" />
                      <p className="form_error">{existingFormMethods.formState.errors.Average_Price?.message}</p>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn" disabled={isLoading}>
  {isLoading ? (
    <>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Prediction running...
    </>
  ) : (
    "Predict Success"
  )}
</button>

                </form>
              </div>
            )}
    
            {/* New Collection Form */}
            {activeTab === "new" && (
              <div className="tab-pane fade show active">
                <form ref={form} onSubmit={handleSubmit(predictSuccess)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Category</label>
                      <input type="text" {...newFormMethods.register("Category")} placeholder="Category" />
                      <p className="form_error">{newFormMethods.formState.errors.Category?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Roadmap Strength</label>
                      <input type="number" min="0" {...newFormMethods.register("Roadmap_Strength")} placeholder="Roadmap Strength" />
                      <p className="form_error">{newFormMethods.formState.errors.Roadmap_Strength?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Social Media Sentiment </label>
                      <input type="number" min="0" step="0.1"  max="1"  {...newFormMethods.register("Social_Media_Sentiment")} placeholder="Social Media Sentiment (0-1)" />
                      <p className="form_error">{newFormMethods.formState.errors.Social_Media_Sentiment?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                      <label>Whitelist Count</label>
                      <input type="number" {...newFormMethods.register("Whitelist_Count")} placeholder="Whitelist count" />
                      <p className="form_error">{newFormMethods.formState.errors.Whitelist_Count?.message}</p>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn" disabled={isLoading}>
  {isLoading ? (
    <>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Prediction running...
    </>
  ) : (
    "Predict Success"
  )}
</button>

                </form>
              </div>
            )}
          </div>
        </div>
      );
    };
    
    export default ContactForm2;
    
