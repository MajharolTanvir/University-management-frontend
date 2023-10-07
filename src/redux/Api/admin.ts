import { IAdmin, IDepartment, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { TagTypes } from "../tag-types";

const ADMIN_URL = "/admin";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [TagTypes.admin],
    }),

    addAdmin: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [TagTypes.admin],
    }),

    // get single admin by id
    admin: build.query({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.admin],
    }),

    // update single admin by id
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.admin],
    }),

    // delete single admin by id
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.admin],
    }),
  }),
});

export const {
  useAdminsQuery,
  useAdminQuery,
  useAddAdminMutation,
  useUpdateAdminMutation,
  useDeleteAdminMutation
} = departmentApi;
