import React from "react";

function Modal({ isOpen, setIsOpen, selectedImage, setSelectedImage }) {
  const handleClick = () => {
    setIsOpen(false);
    setSelectedImage(null);
    console.log(selectedImage.user);
  };

  return (
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal_background open" onClick={handleClick}></div>
      <div className={isOpen ? "modal_container open" : "modal_container"}>
        <div className="modal_container-top">
          <div className="modal_container-top--author">
            <p className="modal_container-top--author_name">
              {selectedImage?.user?.name}
            </p>
            <p className="modal_container-top--author_instagram">
              @{selectedImage?.user?.instagram_username}
            </p>
          </div>
          <p className="modal_container-top--close" onClick={handleClick}>
            X
          </p>
        </div>
        <div className="modal_container-middle">
          <img
            className="modal_container-middle--img"
            src={selectedImage?.urls?.regular}
            alt=""
          />
        </div>
        <div className="modal_container-bottom">
          <p className="modal_container-bottom--location">
            {selectedImage?.user?.location
              ? selectedImage.user.location
              : "Unknown Location"}
          </p>
          <p className="modal_container-bottom--date">
            {selectedImage?.user?.updated_at
              ? `Updated at: ${selectedImage.user.updated_at}`
              : "Unknown Location"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
