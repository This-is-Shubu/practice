const url = 'https://api.classplusapp.com/v2/course/preview/similar/eyJ0dXRvcklkIjpudWxsLCJvcmdJZCI6MTI4NiwiY2F0ZWdvcnlJZCI6bnVsbH0=?filterId=[1]&sortId=[7]&subCatList=&mainCategory=0&limit=80&offset=0';

function getCourses() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const coursesData = data.data.coursesData;
            coursesData.forEach((course, i) => {
                console.log(` ${i + 1} - ${course.name}`);

            })

        });
}

getCourses();