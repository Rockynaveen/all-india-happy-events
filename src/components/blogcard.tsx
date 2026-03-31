type Props = {
    title: string;
    description: string;
    date: string;
    img: string;
};

const BlogCard = ({ title, description, date, img }: Props) => {
    return (
        <div className="rr-project-slider-item">

            <div className="rr-project-slider-thumb">
                <img src={img} alt={title} />
            </div>

            <div className="rr-project-slider-content text-center">
                <h3 className="rr-project-slider-title">
                    <a href="#" className="bloghead">
                        {title}
                    </a>
                </h3>

                <p>{description}</p>

                <a href="#" className="more-link">
                    {date}
                </a>
            </div>

        </div>
    );
};

export default BlogCard;