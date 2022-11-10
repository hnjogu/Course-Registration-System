import React, { useEffect, useRef, useState } from 'react';
import  {ReactDOM, render} from 'react-dom';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import Paginator from "@/Components/Paginator";
import axios from 'axios';
import swal from 'sweetalert';


export default function Dashboard(props) {
    const { coursedata } = usePage().props
    // const numbers = props.numbers;
    const deletedata = (e, course_id) => {
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        // axios.delete(`/api/delete-course/${course_id}`).then(res=>{
        axios.delete(`/delete-course/${course_id}`).then(res=>{
            if(res.data.status === 200)
            {
                swal("Deleted!",res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                thisClicked.innerText = "Delete";
            }
        });
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Courses</h2>}
        >
            <Head title="Courses" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("courses.create") }
                                >
                                    Create Courses
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Course Name</th>
                                        <th className="px-4 py-2">Course Code</th>
                                        <th className="px-4 py-2">Faculty</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {/* const listItems = numbers.map((number) => */}
                                    {coursedata.map(({ course_id, course_name, course_code, faculty }) => (
                                            <tr>
                                                <td className="border px-4 py-2">{ course_id } </td>
                                                <td className="border px-4 py-2">{ course_name }</td>
                                                <td className="border px-4 py-2">{ course_code }</td>
                                                <td className="border px-4 py-2">{ faculty }</td>
                                                <td className="border px-4 py-2">
                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route("courses.edit", course_id)}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button type="button" onClick={(e) => deletedata(e, course_id)} 
                                                    className="btn btn-danger btn-sm mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded">Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                        {coursedata.length === 0 && (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 border-t"
                                                    colSpan="4"
                                                >
                                                    No contacts found.
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
