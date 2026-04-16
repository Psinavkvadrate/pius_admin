import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { mockUsers } from "../../../entities/user/model/mock";
import type { User } from "../../../entities/user/model/types";

import { UsersList } from "../../../widgets/user-list/ui/UserList";
import { EditUserModal } from "../../../features/user-edit/ui/EditUserModal";

const DashboardPage = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    // TODO: API call
    setUsers((prev) => prev.filter((u) => u.userId !== id));
  };

  const handleSave = (updatedUser: User) => {
    // TODO: API call
    setUsers((prev) =>
      prev.map((u) =>
        u.userId === updatedUser.userId ? updatedUser : u
      )
    );
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <UsersList
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditUserModal
        open={open}
        user={selectedUser}
        onClose={handleClose}
        onSave={handleSave}
      />
    </Container>
  );
};

export default DashboardPage;