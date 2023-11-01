import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const CreateCard = () => {
  function getDate(): string {
    const today = new Date();
    const res =
      (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    return res;
  }
  return (
    <div className="flex flex-col border-2 rounded-lg my-4 mx-80 p-4">
      <input
        type="text"
        className="text-3xl font-semibold focus:outline-none bg-transparent"
        placeholder="Title"
      />

      <TextareaAutosize
        placeholder="Content"
        className="focus:outline-none resize-none bg-transparent"
      />
      <p className="flex justify-end text-gray-500 text-sm">{getDate()}</p>
    </div>
  );
};

export default CreateCard;
