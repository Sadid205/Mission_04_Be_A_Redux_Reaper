import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash } from "lucide-react";

type UProps = {
  user: IUser;
};

export default function UserCard({ user }: UProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="w-92 h-32 border border-red-600 flex justify-center">
      <div className="flex justify-between w-48 items-center">
        {user.name}
        <Trash onClick={() => dispatch(removeUser(user.id))} />
      </div>
    </div>
  );
}
