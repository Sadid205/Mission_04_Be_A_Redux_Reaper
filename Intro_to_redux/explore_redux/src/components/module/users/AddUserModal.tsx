import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { useAppDispatch } from "@/redux/hook";
import { Input } from "@/components/ui/input";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { addUser } from "@/redux/features/user/userSlice";
import type { IUser } from "@/types";

export function AddUserModal() {
  const form = useForm();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as IUser));
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="mt-5" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button className="mt-5" type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
