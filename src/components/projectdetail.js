import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
    const { id } = useParams(); 
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`http://localhost:8090/api/projects/${id}`); // URL 매개변수(id)를 사용합니다.
                if (!response.ok) {
                    throw new Error('Failed to fetch project');
                }
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject(); 
    }, [id]); 

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="P-Box">
            <h1>안녕하세요</h1>
        </div>
    );
}

export default ProjectDetail;
