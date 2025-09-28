
const BlogTable = ({ blogs, onOpenModal }) => {

    return (
        <div className="flex-1 p-6">
            <div className="flex justify-end items-center mb-6">
                <button onClick={onOpenModal} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer">
                    Add blog
                </button>
            </div>

            <h2 className='font-bold text-3xl leading-[1.2] text-center mb-5'>Blogs</h2>

            <div className="rounded shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                blogimage
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                blogcontent
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Content
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {blogs.map((blog, index) => (
                            <tr key={blog._id} className="">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 align-top">
                                    {blogs.length - index}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap align-top">
                                    <img
                                        src={blog.image}
                                        alt="Blog post"
                                        className="w-20 h-14 object-cover rounded "
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm  max-w-xs align-top">
                                    <div className="font-medium uppercase mb-1">
                                        {blog.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 max-w-sm align-top">
                                    <div className="line-clamp-3">
                                        {blog.description}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 max-w-md align-top">
                                    <div className="bg-orange-50 p-3 rounded">
                                        <h3 className="font-bold text-gray-800 mb-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {blog.description}
                                        </p>
                                        <div
                                            className=" text-gray-600"
                                            dangerouslySetInnerHTML={{ __html: blog.content }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogTable;