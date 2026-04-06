import React from "react";
import type { FaqItem } from "../../types/pre-event-photographer/pre-event-details/faq-type";

type Props = {
  item: FaqItem;
};

const FaqRow: React.FC<Props> = ({ item }) => {
  return (
    <tr>
      <th>{item.question}</th>

      {item.list ? (
        <td colSpan={2}>
          <ul className="list-unstyled icons-listing">
            {item.list.map((li, index) => (
              <li key={index}>{li}</li>
            ))}
          </ul>
        </td>
      ) : (
        <>
          <td>
            <span className="txt-orange">{item.answer}</span>
          </td>
          <td></td>
        </>
      )}
    </tr>
  );
};

export default FaqRow;