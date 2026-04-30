<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import faqData from "../../data/pre-event-photographer/pre-event-details/faq-data";
=======
// import faqData from "../../data/pre-event-photographer/pre-event-details/faq-data";
>>>>>>> cb3e55f (final commit)
import FaqRow from "./faq-row";
=======
{/* ================= FAQ ================= */}
<div className="card-shadow pos-rel">
  <div className="card-shadow-header">
    <h3>
      <i className="fa fa-question-circle"></i> FAQ
    </h3>
  </div>
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)

  <div className="card-shadow-body p-0">

    {/* Loading */}
    {faqLoading && (
      <div style={{ padding: "15px" }}>Loading FAQs...</div>
    )}

    {/* Empty */}
    {!faqLoading && faqs.length === 0 && (
      <div style={{ padding: "15px" }}>No FAQs available</div>
    )}

    {/* Data */}
    {!faqLoading && faqs.length > 0 && (
      <table className="table mb-0 table-faqs">
        <tbody>
          {faqs.map((faq: any, index: number) => (
            <tr key={faq.id || index}>
              <th>{faq.question || "N/A"}</th>
              <td>
                {Array.isArray(faq.answer)
                  ? faq.answer.join(", ")
                  : faq.answer || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

  </div>
</div>