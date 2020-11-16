export type ReservationListProps = {
  onOpenModal: () => void;
};
export type ReservationItemProps = {
  title: string;
  time: number;
  isLast: boolean;
  onOpenModal: () => void;
};
