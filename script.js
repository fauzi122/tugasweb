<script>
document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content');

    document.getElementById('overview').addEventListener('click', function () {
        content.innerHTML = '<h1>Overview</h1><p>This is the overview section of the dashboard.</p>';
    });

    document.getElementById('reports').addEventListener('click', function () {
        content.innerHTML = '<h1>Reports</h1><p>Here you can view various reports.</p>';
    });

    document.getElementById('analytics').addEventListener('click', function () {
        content.innerHTML = '<h1>Analytics</h1><p>Analyze the performance of different sectors here.</p>';
    });

    document.getElementById('export').addEventListener('click', function () {
        content.innerHTML = '<h1>Export</h1><p>Export your data from this section.</p>';
    });
});
</script>