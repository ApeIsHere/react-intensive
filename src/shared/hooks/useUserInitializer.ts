import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/providers/store/store";
import { selectAllUsers, setAllUsers } from "../../entities/user/model/slice/userSlice";
import { useGetAllUsersQuery } from "../../entities/user/api/usersApi";

// Skip fetching users if users are in redux store already
export const useUserInitializer = () => {
  const dispatch = useAppDispatch();
  const allUsers = useSelector((state: RootState) => selectAllUsers(state));
  const shouldSkipQuery = allUsers.length > 0;

  const { data: usersFromQuery = [], isSuccess } = useGetAllUsersQuery(undefined, {
    skip: shouldSkipQuery,
  });

  useEffect(() => {
    if (isSuccess && usersFromQuery.length > 0) {
      dispatch(setAllUsers(usersFromQuery));
    }
  }, [isSuccess, usersFromQuery, dispatch]);
};
