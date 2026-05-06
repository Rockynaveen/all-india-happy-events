import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "zustand";

import { createEventRequest } from "../services/event-service";

import logo from "../assets/images/logo_all_happy_events.png";
import banner from "../assets/images/weddings/bridal_fashion.png";

import "../assets/css/style.css";


const eventSchema = z.object({
    name: z.string().min(1, "Name required"),

    phone: z.string().min(10, "Enter valid phone"),

    email: z.string().email("Invalid email"),

    event_date: z.string().min(1, "Select date"),

    message: z.string().min(5, "Message too short"),
});


type FormData = z.infer<typeof eventSchema>;


type Store = {
    requests: FormData[];
    addRequest: (data: FormData) => void;
};


const useStore = create<Store>((set) => ({
    requests: [],

    addRequest: (data) =>
        set((state) => ({
            requests: [...state.requests, data],
        })),
}));


const EventForm = () => {

    const { addRequest, requests } = useStore();


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(eventSchema),
    });


    const mutation = useMutation({
        mutationFn: createEventRequest,

        onSuccess: (data, variables) => {
            addRequest(data); // use API response
            reset();
        },
    });


    const onSubmit = (data: FormData) => {
        mutation.mutate(data);
    };


    return (
        <div className="event-page my-5 py-5">

            <div className="event-wrapper my-3">


                {/* LEFT */}
                <div className="event-form-section">

                    <img
                        src={logo}
                        alt="logo"
                        className="event-logo"
                    />

                    <span className="event-heading-small">
                        EVENT ENQUIRY
                    </span>

                    <h2 className="event-main-title">
                        Tell us about your celebration
                    </h2>

                    <p className="event-subtitle">
                        Weddings, birthdays, engagements, corporate events & more.
                    </p>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <input
                                    className="event-field"
                                    placeholder="Full Name"
                                    {...register("name")}
                                />

                                <p className="event-error">
                                    {errors.name?.message}
                                </p>
                            </div>


                            <div className="col-md-6 mb-3">
                                <input
                                    className="event-field"
                                    placeholder="Phone Number"
                                    {...register("phone")}
                                />

                                <p className="event-error">
                                    {errors.phone?.message}
                                </p>
                            </div>

                        </div>



                        <input
                            className="event-field mb-3"
                            placeholder="Email Address"
                            {...register("email")}
                        />

                        <p className="event-error">
                            {errors.email?.message}
                        </p>



                        <input
                            type="date"
                            className="event-field mb-3"
                            {...register("event_date")}
                        />

                        <p className="event-error">
                            {errors.event_date?.message}
                        </p>



                        <textarea
                            rows={5}
                            className="event-message"
                            placeholder="Tell us about your event..."
                            {...register("message")}
                        />

                        <p className="event-error">
                            {errors.message?.message}
                        </p>



                        <button
                            type="submit"
                            className="event-submit-btn"
                            disabled={mutation.isPending}
                        >
                            {mutation.isPending
                                ? "Submitting..."
                                : "Book My Event"}
                        </button>

                    </form>

                </div>



                {/* RIGHT */}
                <div className="event-banner-section">

                    <img
                        src={banner}
                        alt="banner"
                    />

                    <div className="event-banner-content">

                        <h2>
                            Every celebration deserves
                            something unforgettable.
                        </h2>

                        <ul>
                            <li>Wedding Planning</li>
                            <li>Birthday Events</li>
                            <li>Venue Selection</li>
                            <li>Photography</li>
                            <li>Catering Services</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default EventForm;