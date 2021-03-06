import "./styles/refs.css";
import { FaStar, FaUserCircle } from "react-icons/fa";

const ReferencesSection = () => {
  return (
    <div className="refs">
      <div className="container">
        <h2>REFERENCES</h2>
        <div className="row">
          <div className="col">
            <div className="circle">
              <FaUserCircle />
            </div>
            <h2 className="name">Lars Svenson</h2>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              voluptas sint autem error repudiandae odit dolorum ducimus.
            </p>
          </div>
          <div className="col">
            <div className="circle">
              <FaUserCircle />
            </div>
            <h2 className="name">Lars Svenson</h2>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              voluptas sint autem error repudiandae odit dolorum ducimus.
            </p>
          </div>
          <div className="col">
            <div className="circle">
              <FaUserCircle />
            </div>
            <h2 className="name">Lars Svenson</h2>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              voluptas sint autem error repudiandae odit dolorum ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesSection;
