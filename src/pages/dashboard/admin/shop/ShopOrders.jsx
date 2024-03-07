import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";

const AllEvents = () => {
  const axios = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get("/product-orders");
      return response.data;
    },
  });
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const data = useMemo(() => users, [users]);

  const columns = [
    {
      header: "Product Image",
      accessorKey: "product_image",
      cell: ({ cell: { row } }) => (
        <>
          <img className="w-36 rounded-lg" src={row.original.product_image} />
        </>
      ),
    },
    {
      header: "Product Name",
      accessorKey: "product_name",
    },
    // {
    //   header: "Product Description",
    //   accessorKey: "product_description",
    // },
    {
      header: "Product Price",
      accessorKey: "product_price",
    },
    {
      header: "User Name",
      accessorKey: "user_name",
    },
    {
      header: "User Email",
      accessorKey: "user_email",
    },
    // {
    //   header: "User Image",
    //   accessorKey: "user_image",
    //   cell: ({ cell: { row } }) => (
    //     <>
    //       <img  className="w-10 rounded-full" src={row.original.user_image} />
    //     </>
    //   ),
    // },
    // {
    //   header: "Status",
    //   accessorKey: "status",
    // },
    // {
    //   header: "Events Date",
    //   accessorKey: "date",
    //   cell: ({ cell: { row } }) => (
    //     <span>{new Date(row.original.date).toLocaleDateString()}</span>
    //   ),
    // },
    // {
    //   header: "Created Date",
    //   accessorKey: "createdAt",
    //   cell: ({ cell: { row } }) => (
    //     <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
    //   ),
    // },
    // {
    //     header: "Edit",
    //     accessor: "_id",
    //     cell: ({ cell: { row } }) => (
    //         <Link key={row.original._id} to={`/dashboard/edit-event/${row.original._id}`}>Edit</Link>
    //     ),
    // },
    // {
    //   header: "Delete",
    //   accessorKey: "_id",
    //   cell: ({ cell: { row } }) => (
    //     <button
    //       // onClick={() => handleDelete(row.original._id)}
    //       className="bg-red-600 rounded text-white px-1 py-0.5 "
    //     >
    //       Delete
    //     </button>
    //   ),
    // },
    {
      header: "Status",
      accessorKey: "_id",
      cell: ({ cell: { row } }) => (
        <button
          // onClick={() => handleDelete(row.original._id)}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Ready to Delivery
        </button>

      ),
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  // const handleDelete = async (id) => {
  //     try {
  //         const swalConfirm = await Swal.fire({
  //             title: "Are you sure?",
  //             text: "You won't be able to revert this!",
  //             icon: "warning",
  //             showCancelButton: true,
  //             confirmButtonColor: "#3085d6",
  //             cancelButtonColor: "#d33",
  //             confirmButtonText: "Yes, delete it!",
  //         });
  //         if (swalConfirm.isConfirmed) {
  //             const response  = await axios.delete(`/delete-user/${id}`);
  //             //console.log(response);
  //             refetch();
  //             Swal.fire({
  //                 title: "Deleted!",
  //                 text: "Your Camp has been deleted.",
  //                 icon: "success",
  //             });
  //         }
  //     } catch (error) {
  //         //console.log(error);
  //     }
  // };

  return (
    <>
      <div>
        <div className="flex justify-between items-center py-2">
          <h3 className="font-Quicksand text-primary text-2xl font-bold">
            Orders for Shop Items
          </h3>
          <div className="block relative">
            <input
              placeholder="Search"
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
              className="p-2 w-full border bg-rose-50/60 text-primary dark:bg-rose-100 border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-rose-50 dark:bg-gray-700 dark:text-gray-400">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      scope="col"
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="px-6 py-3"
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                            {
                              asc: "🔼",
                              desc: "🔽",
                            }[header.column.getIsSorted() ?? null]
                          }
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="bg-white border-b dark:bg-primary dark:border-rose-700"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center py-5">
          <div className="inline-flex mt-2 xs:mt-0">
            <button
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-s hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => table.setPageIndex(0)}
            >
              First
            </button>
            <button
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              Prev
            </button>
            <button
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              Next
            </button>
            <button
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 rounded-e hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvents;
