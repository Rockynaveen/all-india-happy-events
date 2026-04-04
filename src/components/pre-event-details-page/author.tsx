import type { AuthorProfile } from "../../types/pre-event-photographer/pre-event-details/author-type";

type Props = {
  data: AuthorProfile;
};

const AuthorProfile = ({ data }: Props) => {
  return (
    <div className="widget mb-5">
      <h3 className="widget-title">Author Profile</h3>

      <div className="profile-avatar">
        <img src={data.image} alt={data.name} />
        <div className="content">
          <small>{data.role}</small>
          {data.name}
        </div>
      </div>

      <p>{data.description}</p>

      <div className="icon-box-style-3 sided mt-3 mb-0">
        <i className="fa fa-phone"></i>
        <span> {data.phone}</span>
      </div>

      <div className="icon-box-style-3 sided mt-3 mb-0">
        <i className="fa fa-envelope-o"></i>
        <span>
          <a href={`mailto:${data.email}`} className="btn-link btn-link-secondary">
            {data.email}
          </a>
        </span>
      </div>

      <div className="icon-box-style-3 sided mt-3 mb-0">
        <i className="fa fa-globe"></i>
        <span>
          <a
            href={`https://${data.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link btn-link-secondary"
          >
            {data.website}
          </a>
        </span>
      </div>
    </div>
  );
};

export default AuthorProfile;