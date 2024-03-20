import { Portal } from "react-portal";

export default function Dialog({ isOpen, title, children, closePortal }) {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal" style={{ display: "block" }} id="exampleModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closePortal}
                  ></button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closePortal}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
