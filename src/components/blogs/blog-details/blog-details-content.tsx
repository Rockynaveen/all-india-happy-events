import React from "react";

// ✅ Images
import ritualsImg from "../../../assets/images/categories/rituals.png";
import authorImg from "../../../assets/images/author_img.png";
import commentImg1 from "../../../assets/images/testimonials/test_1.png";
import commentImg2 from "../../../assets/images/testimonials/test_4.png";
import replyImg from "../../../assets/images/testimonials/test_3.png";
import userImg from "../../../assets/images/about/team/team_img_7.jpg";

const BlogDetailsContent = () => {
  return (
    <div className="post-content">

      {/* Title */}
      <h3 className="blog-title ">
        Top Telugu Wedding Tips for Bride & Groom
      </h3>

      {/* Meta */}
      <div className="mb-3">
        <span className="meta-date mr-3">July 12, 2020</span>

        <span className="post-category">
          <a href="#">Wedding</a>
        </span>
      </div>

      {/* Content */}
      <div className="entry-content">

        <p>
          Planning a Telugu wedding comes with beautiful rituals like
          Pellikuthuru, Pellikoothuru, Snanam, Jeelakarra Bellam, and the main
          Muhurtham. To make everything smooth and stress-free, a little planning
          goes a long way. Here are some simple, practical tips every bride and groom
          in Andhra & Telangana should keep in mind.
        </p>

        <p>
          From choosing the right venue to coordinating outfits for traditional
          ceremonies, these small steps help keep the celebrations peaceful and fully
          enjoyable. Telugu weddings are vibrant, emotional, and full of culture—so
          preparing in advance helps you enjoy each moment without hurry.
        </p>

        {/* Quote */}
        <blockquote className="blockquote-1 my-5">
          A well-planned wedding lets you enjoy rituals deeply—especially moments
          like Jeelakarra Bellam, tying the Mangalsutram, and the blessings from elders.
        </blockquote>

        {/* Section 1 */}
        <h4 className="fw-7 mb-4">
          1. Choose the Right Venue & Muhurtham
        </h4>

        <img
          src={ritualsImg}
          alt=""
          className="rounded shadow-sm mr-4 mb-3"
          style={{ width: "320px", float: "left" }}
        />

        <p>
          Start by finalizing your Muhurtham from a family priest or panchangam.
          Telugu weddings often start early in the morning,
          so pick a venue that can accommodate both the rituals and guest movement easily.
        </p>

        <p>
          Ensure the mandapam is spacious for ceremonies like Jeelakarra Bellam,
          Panigrahanam, and Saptapadi. Adding simple South Indian décor—mango leaves,
          jasmine flowers, brass decorations—brings an authentic vibe.
        </p>

        <p>
          If you expect large crowds, choose halls in Hyderabad, Vijayawada,
          Guntur, Vizag, or Warangal with good parking and dining space.
        </p>

        {/* Clear float */}
        <div style={{ clear: "both" }}></div>

        {/* Section 2 */}
        <h4 className="fw-7 mb-4">
          2. Outfit Tips for Bride & Groom
        </h4>

        <p>
          Brides can plan their pattu sarees for each ritual—yellow for Pellikuthuru,
          bright shades for Muhurtham, and soft tones for reception.
        </p>

        <p>
          Grooms can coordinate with traditional dhoti, kurta, or simple sherwani
          depending on the event.
        </p>

        <p>
          Comfort matters because Telugu weddings have long ceremonies—choose
          breathable fabrics and keep backup outfits ready.
        </p>

        {/* Tags + Social */}
        <div className="tag-wrap">
          <div className="post-tags">
            <i className="fa fa-tags"></i>
            <a href="#">Wedding Tips</a>
            <a href="#">Telugu Wedding</a>
            <a href="#">Bride & Groom</a>
          </div>

          <div className="social-sharing">
            <em>Share This</em>
            <a href="#" className="share-btn-facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="share-btn-twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="share-btn-instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="share-btn-linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="post-linking">
          <div className="previous-post">
            <a href="#">
              <small>Previous Post</small>
              Things Bride Should Know
            </a>
          </div>

          <div className="next-post">
            <a href="#">
              <small>Next Post</small>
              10 Tips For Wedding Destinat
            </a>
          </div>
        </div>

        {/* Author */}
        <div className="author-wrap">
          <div className="thumb">
            <img src={authorImg} alt="" />
          </div>

          <div className="content">
            <h3>
              Admin <small>(AUTHOR)</small>
            </h3>

            <p>
              This guide is curated to help Telugu brides and grooms enjoy their big day
              with ease. From rituals to décor inspiration, our goal is to bring simple clarity
              to your planning.
            </p>

            <button className="btn btn-default btn-rounded btn-md">
              View All Post
            </button>
          </div>
        </div>

        {/* Comments */}
        <div className="commnets-reply">
          <h4 className="fw-7 mb-4">(4) Comments</h4>

          <div className="media">
            <img className="thumb" src={commentImg1} alt="" />
            <div className="media-body">
              <h4 className="mb-0">Ananya Reddy</h4>
              <small className="txt-blue">17, Aug, 2020</small>
              <p>Super helpful! The Muhurtham and venue coordination tips are exactly what we needed.</p>
            </div>
          </div>

          <div className="media">
            <img className="thumb" src={commentImg2} alt="" />
            <div className="media-body">
              <h4 className="mb-0">Vivek Chandra</h4>
              <small className="txt-blue">17, Aug, 2020</small>
              <p>Good breakdown of rituals.</p>

              <div className="media reply-box">
                <img src={replyImg} alt="" className="thumb" />
                <div className="media-body">
                  <h5 className="mb-0">Sravya Kolanu</h5>
                  <small className="txt-blue">17, Aug, 2020</small>
                  <p>
                    Loved the décor suggestions! Mango thoranam and jasmine strings really elevate any Telugu mandapam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="media">
            <img className="thumb" src={userImg} alt="" />
            <div className="media-body">
              <h4 className="mb-0">Harsha Vardhan</h4>
              <small className="txt-blue">17, Aug, 2020</small>
              <p>Very practical advice.</p>
            </div>
          </div>

        </div>

        {/* Form */}
        <h4 className="fw-7 mb-4">Leave a Comment</h4>

        <div className="row">
          <div className="col-md-12 mb-0">
            <div className="form-group">
              <textarea className="form-control" rows={5} placeholder="Your Comments"></textarea>
            </div>
          </div>

          <div className="col-md-6 mb-0">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
          </div>

          <div className="col-md-6 mb-0">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Post Your Comment
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogDetailsContent;