import { useCardContext } from "./Shopper";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// function Example() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 Launch demo modal
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Woohoo, you're reading this text in a modal!
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }
const Cardset = () => {
    const cardset = useCardContext();
    const cardlist = cardset.currCards;
    const { addToCart } = useCardContext();
    const [show, setShow] = useState(false);

    return (
        <div className="cards">
            {cardlist.map((card) => {
                if (
                    !(
                        card.cardSet === "Hero Skins" ||
                        (card.cardSet === "Basic" && card.type === "Hero")
                    )
                ) {
                    return (
                        <div className="card" onClick={() => addToCart(card)}>
                            <img src={card.img} alt={card.name} />
                        </div>
                        // <>
                        //     <Button onClick={handleShow}>
                        //         <div className="card">
                        //             <img src={card.img} alt={card.name} />
                        //         </div>
                        //     </Button>

                        //     <Modal show={show} onHide={handleClose}>
                        //         <Modal.Header closeButton>
                        //             <Modal.Title>{card.name}</Modal.Title>
                        //         </Modal.Header>
                        //         <Modal.Body>
                        //             Woohoo, you're reading this text in a modal!
                        //         </Modal.Body>
                        //         <Modal.Footer>
                        //             <Button
                        //                 variant="secondary"
                        //                 onClick={handleClose}
                        //             >
                        //                 Close
                        //             </Button>
                        //             <Button
                        //                 variant="primary"
                        //                 onClick={handleClose}
                        //             >
                        //                 Save Changes
                        //             </Button>
                        //         </Modal.Footer>
                        //     </Modal>
                        // </>
                    );
                }
            })}
        </div>
    );
};
export default Cardset;
