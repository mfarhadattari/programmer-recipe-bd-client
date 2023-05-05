import React from "react";
import Pdf from "react-to-pdf";

const Blog = ({ blog }) => {
  const { answer, id, question } = blog;
  const ref = React.createRef();
  return (
    <div className="border border-base-300 bg-base-100 rounded-box mt-5 w-1/2 mx-auto p-5">
      <div ref={ref} className="p-10">
        <h2 className="text-xl font-medium">
          Question {id}: {question}
        </h2>
        <p className="text-xl mt-5 text-justify text-gray-700"><span className="font-medium">Answer:</span> {answer}</p>
      </div>
      <button className="btn btn-primary ml-10">
        <Pdf targetRef={ref} filename={`question${id}.pdf`}>
          {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}
        </Pdf>
      </button>
    </div>
  );
};

export default Blog;
