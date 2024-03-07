

// const CustomEventBooking = () => {
//     return (
//         <div>

//         <h2 className="text-center text-primary text-2xl font-semibold">My Custom Events</h2>

//       </div>
//     );
// };

// export default CustomEventBooking;


// const Cart = () => {
//   return (
//     <div>

//       <h2 className="text-center text-primary text-2xl font-semibold">My Orders</h2>

//     </div>
//   );
// };

// export default Cart;

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
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";

const Cart = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const { data: customEvent = [], refetch } = useQuery({
    queryKey: ["customEvent"],
    queryFn: async () => {
      const response = await axios.get("/custom-event");
      return response.data;
    },
  });
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");


  // Filter products based on user_email
  const filteredCustomEvent = useMemo(() => {
    return customEvent.filter(customEvent => customEvent.email === user.email);
  }, [customEvent, user.email]);

  // const data = useMemo(() => products, [products]);

  const data = useMemo(() => filteredCustomEvent, [filteredCustomEvent]);

  const columns = [
    // {
    //   header: "Product Image",
    //   accessorKey: "product_image",
    //   cell: ({ cell: { row } }) => (
    //     <>
    //       <img className="w-36 rounded-lg" src={row.original.product_image} />
    //     </>
    //   ),
    // },
    {
      header: "Name",
      accessorKey: "fullName",
    },

    {
      header: "Email",
      accessorKey: "email",
    },

    {
      header: "Event Type",
      accessorKey: "eventType",
    },
    {
      header: "Guests",
      accessorKey: "guests",
    },
    {
      header: "Cost",
      accessorKey: "cost",
    },

    {
      header: "Status",
      accessorKey: "status",
    },

    {
      header: "Action",
      accessorKey: "_id",
      cell: ({ cell: { row } }) => (
        <button
          // onClick={() => handleDelete(row.original._id)}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Cancel Order
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
            My Orders
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
                // here only map those items which are matched on user_email with user.email, here user.email is from useAuth
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


        {/* pagination  */}
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
        {/* pagination end */}


      </div>
    </>
  );
};

export default Cart;
