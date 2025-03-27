import React, { useState } from 'react';

const CareersPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const jobOpenings = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "We're looking for an experienced frontend developer with React expertise to join our team and help build innovative user interfaces.",
            requirements: ["5+ years of frontend development", "Expert knowledge of React", "Experience with modern CSS and UI frameworks", "Understanding of web accessibility standards"],
            responsibilities: ["Develop responsive user interfaces", "Collaborate with UX/UI designers", "Write clean, maintainable code", "Mentor junior developers"]
        },
        {
            id: 2,
            title: "Backend Engineer",
            department: "Engineering",
            location: "New York, NY",
            type: "Full-time",
            description: "Join our backend team to build scalable, robust APIs and services that power our applications.",
            requirements: ["3+ years of backend development", "Experience with Node.js/Python/Java", "Knowledge of database design", "Understanding of microservices architecture"],
            responsibilities: ["Design and implement APIs", "Optimize application performance", "Ensure data security", "Troubleshoot production issues"]
        },
        {
            id: 3,
            title: "UX/UI Designer",
            department: "Design",
            location: "Hybrid",
            type: "Full-time",
            description: "Help us create intuitive, beautiful user experiences that delight our customers and solve real problems.",
            requirements: ["3+ years of UX/UI design experience", "Proficiency in design tools like Figma", "Understanding of user-centered design principles", "Portfolio of previous work"],
            responsibilities: ["Create wireframes and prototypes", "Conduct user research", "Collaborate with engineering teams", "Define design systems"]
        },
        {
            id: 4,
            title: "DevOps Engineer",
            department: "Operations",
            location: "Remote",
            type: "Full-time",
            description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes.",
            requirements: ["Experience with AWS/Azure/GCP", "Knowledge of containerization (Docker, Kubernetes)", "CI/CD pipeline implementation", "Infrastructure as code (Terraform, CloudFormation)"],
            responsibilities: ["Automate deployment processes", "Monitor system performance", "Optimize cloud costs", "Ensure system security"]
        },
        {
            id: 5,
            title: "Product Manager",
            department: "Product",
            location: "San Francisco, CA",
            type: "Full-time",
            description: "Lead product development initiatives from conception to launch, working with cross-functional teams to deliver value to our customers.",
            requirements: ["3+ years of product management experience", "Strong analytical skills", "Excellent communication abilities", "Technical background preferred"],
            responsibilities: ["Define product strategy", "Prioritize feature development", "Work with stakeholders", "Analyze market trends"]
        },
        {
            id: 6,
            title: "QA Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Contract",
            description: "Help ensure our software meets the highest quality standards through manual and automated testing.",
            requirements: ["Experience with test automation", "Knowledge of QA methodologies", "Strong attention to detail", "ISTQB certification a plus"],
            responsibilities: ["Create test plans", "Implement automated tests", "Report and track bugs", "Perform regression testing"]
        }
    ];

    const departments = ['All', ...new Set(jobOpenings.map(job => job.department))];
    const locations = ['All', ...new Set(jobOpenings.map(job => job.location))];

    const filteredJobs = jobOpenings.filter(job => {
        const matchesCategory = selectedCategory === 'All' || job.department === selectedCategory;
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const [expandedJobId, setExpandedJobId] = useState(null);

    return (
        <div className="min-h-screen">

            <div className="container mx-auto px-4">

                {/* Filters */}
                <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <select
                            className="px-4 py-2 border rounded-md"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept} Department</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search positions..."
                            className="px-4 py-2 border rounded-md w-full md:w-64"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map(job => (
                            <div key={job.id} className="bg-slate-50 border border-slate-100 rounded-lg overflow-hidden">
                                <div
                                    className="p-6 cursor-pointer"
                                    onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{job.department}</span>
                                                <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{job.location}</span>
                                                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">{job.type}</span>
                                            </div>
                                        </div>
                                        <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                                            {expandedJobId === job.id ? 'Hide Details' : 'View Details'}
                                        </button>
                                    </div>
                                </div>

                                {expandedJobId === job.id && (
                                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                                        <p className="mb-4">{job.description}</p>

                                        <div className="mb-4">
                                            <h4 className="font-bold text-lg mb-2">Requirements:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                {job.requirements.map((req, index) => (
                                                    <li key={index}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-lg mb-2">Responsibilities:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                {job.responsibilities.map((resp, index) => (
                                                    <li key={index}>{resp}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 bg-white rounded-lg shadow-md">
                            <p className="text-lg text-gray-600">No positions found matching your criteria.</p>
                            <button
                                className="mt-4 text-blue-600 underline"
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setSearchQuery('');
                                }}
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;