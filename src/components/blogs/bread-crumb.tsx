import { Link } from "react-router-dom";

type Props = {
    title: string;
};

const Breadcrumbs = ({ title }: Props) => {
    return (
        <section className="breadcrumbs-page">
            <div className="container">
                <h1>{title}</h1>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">
                                <i className="fa fa-home"></i>
                            </Link>
                        </li>

                        <li className="breadcrumb-item active" aria-current="page">
                            {title}
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumbs;