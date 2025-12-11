export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.id });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
