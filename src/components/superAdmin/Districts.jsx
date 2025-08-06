import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OCRWithAmountExtractor = () => {
  const [imageURL, setImageURL] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [amountMatches, setAmountMatches] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      extractText(url);
    }
  };

  const extractText = async (imagePath) => {
    setExtractedText("Extracting...");
    setAmountMatches([]);
    setSelectedAmount("");

    try {
      const result = await Tesseract.recognize(imagePath, "eng", {
        logger: (m) => console.log(m),
      });

      const text = result.data.text;
      setExtractedText(text);

      // Match ₹ or Rs. with amounts
      const regex =
        /(?:₹|Rs\.?)\s?\d{1,3}(,\d{3})*(\.\d{1,2})?|\d{1,5}(\.\d{1,2})?/gi;
      const matches = text.match(regex);

      if (matches && matches.length > 0) {
        setAmountMatches(matches);
        setSelectedAmount(matches[0]); // pick the first by default
      } else {
        setAmountMatches([]);
        setSelectedAmount("Amount not found");
      }
    } catch (error) {
      console.error("OCR Error:", error);
      setExtractedText("Failed to extract text");
      setSelectedAmount("Error");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h2>📸 Extract Paid Amount from Screenshot</h2>

      <input type="file" accept="image/*" onChange={handleUpload} />

      {imageURL && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <img
            src={imageURL}
            alt="Uploaded"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      )}

      {extractedText && (
        <div style={{ marginTop: "20px" }}>
          <h3>📄 Extracted Text:</h3>
          <pre
            style={{
              backgroundColor: "#f2f2f2",
              padding: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {extractedText}
          </pre>
        </div>
      )}

      {amountMatches.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>💰 Detected Amounts:</h3>
          <ul>
            {amountMatches.map((amt, index) => (
              <li key={index}>
                <button
                  style={{
                    backgroundColor:
                      amt === selectedAmount ? "#4CAF50" : "#e0e0e0",
                    color: amt === selectedAmount ? "white" : "black",
                    padding: "5px 10px",
                    margin: "5px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedAmount(amt)}
                >
                  {amt}
                </button>
              </li>
            ))}
          </ul>
          <h4>
            ✅ Selected Amount:{" "}
            <span style={{ color: "green" }}>{selectedAmount}</span>
          </h4>
        </div>
      )}

      {amountMatches.length === 0 && extractedText && (
        <p style={{ color: "red" }}>
          ❌ Could not detect any amount from the image.
        </p>
      )}
    </div>
  );
};

export default OCRWithAmountExtractor;
