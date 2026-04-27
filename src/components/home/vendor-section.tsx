import VendorCard from "../home/vendor-card";

const VendorsSection = ({ vendors, isLoading, error }) => {
  if (isLoading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center py-4">Error loading vendors</p>;

  return (
    <div className="container py-4">
      <h3 className="mb-3">Top Vendors</h3>

      <div className="row">
        {vendors?.map((vendor) => (
          <div key={vendor.id} className="col-md-3 mb-3">
            <VendorCard vendor={vendor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorsSection;