import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function User() {
  const users = useAppSelector(selectUsers);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <h1>This is User component</h1>
      <div className="flex justify-end items-center">
        <AddUserModal />
      </div>
      <div className="flex gap-7">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
}
