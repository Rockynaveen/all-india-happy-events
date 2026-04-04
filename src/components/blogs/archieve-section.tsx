import { archives } from "../../data/blogs/archive-data";
import ArchiveItem from "./archieve-card";

const ArchivesSection = () => {
    return (
        <div className="widget">
            <h3 className="widget-title">Archives</h3>

            <ul className="list-unstyled icons-listing mb-0 widget-listing arrow">
                {archives.map((item) => (
                    <ArchiveItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default ArchivesSection;