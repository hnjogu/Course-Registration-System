import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const { course } = usePage().props;
    const { data, setData, put, errors } = useForm({
        course_name: course.course_name || "",
        course_code: course.course_code || "",
        faculty: course.faculty || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("courses.update", course.course_id));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Post</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("courses.index") }
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Course Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Course Name"
                                            name="course_name"
                                            value={data.course_name}
                                            onChange={(e) =>
                                                setData("course_name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.course_name}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Course Code</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Course Code"
                                            name="course_code"
                                            value={data.course_code}
                                            onChange={(e) =>
                                                setData("course_code", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.course_code}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Faculty</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Faculty"
                                            name="faculty"
                                            value={data.faculty}
                                            onChange={(e) =>
                                                setData("faculty", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.faculty}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
