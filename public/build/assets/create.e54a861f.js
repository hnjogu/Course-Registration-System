import{u as d,j as s,a as e,H as u,L as m}from"./app.d200b75a.js";import{A as i}from"./AuthenticatedLayout.5c79ad2a.js";import"./ApplicationLogo.3f5cc10b.js";function b(c){const{data:l,setData:t,errors:r,post:n}=d({course_name:"",course_code:"",faculty:""});function o(a){a.preventDefault(),n(route("courses.store"))}return s(i,{auth:c.auth,errors:c.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Create Course"}),children:[e(u,{title:"Course"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:s("div",{className:"p-6 bg-white border-b border-gray-200",children:[e("div",{className:"flex items-center justify-between mb-6",children:e(m,{className:"px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none",href:route("courses.index"),children:"Back"})}),s("form",{name:"createForm",onSubmit:o,children:[s("div",{className:"flex flex-col",children:[s("div",{className:"mb-4",children:[e("label",{className:"",children:"Course Name"}),e("input",{type:"text",className:"w-full px-4 py-2",label:"Course Name",name:"course_name",value:l.course_name,onChange:a=>t("course_name",a.target.value)}),e("span",{className:"text-red-600",children:r.course_name})]}),s("div",{className:"mb-4",children:[e("label",{className:"",children:"Course Code"}),e("input",{type:"text",className:"w-full px-4 py-2",label:"Course Code",name:"course_code",value:l.course_short_form,onChange:a=>t("course_code",a.target.value)}),e("span",{className:"text-red-600",children:r.course_code})]}),s("div",{className:"mb-4",children:[e("label",{className:"",children:"Faculty"}),e("input",{type:"text",className:"w-full px-4 py-2",label:"FacultyH",name:"faculty",value:l.faculty,onChange:a=>t("faculty",a.target.value)}),e("span",{className:"text-red-600",children:r.faculty})]})]}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"px-6 py-2 font-bold text-white bg-green-500 rounded",children:"Save"})})]})]})})})})]})}export{b as default};
