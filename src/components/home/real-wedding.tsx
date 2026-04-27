import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getRealWeddings } from "../services/realwedding.services";
import "../assets/css/realweddings.css";

export default function RealWeddingsHome() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["real-weddings"],
    queryFn: getRealWeddings,
  });

  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);
  const [index, setIndex] = useState(0);

  if (isLoading) return <h2 className="center">Loading weddings...</h2>;
  if (isError) return <h2 className="center">Failed to load weddings</h2>;

  const openGallery = (images: string[], startIndex: number) => {
    setSlides(images.map((img) => ({ src: img })));
    setIndex(startIndex);
    setOpen(true);
  };

  return (
    <section className="rw-section">
      <div className="rw-container">
        <div className="rw-header">
          <h1>Real Weddings</h1>
          <p>Beautiful love stories from across India 💍</p>
        </div>

        <div className="rw-grid-pro">
          {data?.map((item: any) => {
            const images = [item.thumbnail, ...(item.galleries || [])];

            return (
              <div className="rw-card-pro" key={item.slug}>
                
                {/* IMAGE WRAPPER */}
                <div className="rw-img-wrapper">

                  <Link to={`/real-weddings/${item.slug}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="rw-main-img"
                    />
                  </Link>

                  {/* OVERLAY */}
                  <div className="rw-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.city}</p>
                  </div>

                  {/* BADGE */}
                  <div className="rw-badge">
                    {item.wedding_date}
                  </div>
                </div>

                {/* THUMBNAILS */}
                <div className="rw-thumbs">
                  {item.galleries?.slice(0, 3).map((img: string, i: number) => (
                    <img
                      key={i}
                      src={img}
                      onClick={() => openGallery(images, i + 1)}
                      className="rw-thumb-img"
                    />
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </section>
  );
} **