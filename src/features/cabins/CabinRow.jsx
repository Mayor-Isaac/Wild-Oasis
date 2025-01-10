import { useState } from "react";
import styled from "styled-components";
import { HiSquare2Stack, HiOutlinePencil, HiTrash } from "react-icons/hi2";
// import { HiOutlinePencil, HiTrash } from "react-icons/hi";

////////////////////////////
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  font-size: 1rem;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinTable({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const [showForm, setShowForm] = useState(false);
  const { isCreating, createCabin } = useCreateCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image: imageUrl,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      imageUrl,
      description,
    });
    console.log("Here");
  }
  return (
    <>
      <TableRow role="row">
        <Img src={imageUrl} alt={name} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <Button disabled={isCreating} onClick={() => handleDuplicate}>
            <HiSquare2Stack />
          </Button>
          <Button
            onClick={() => {
              setShowForm((show) => !show);
            }}
          >
            <HiOutlinePencil />
          </Button>
          <Button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </Button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
export default CabinTable;
