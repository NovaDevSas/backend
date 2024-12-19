const Location = require('../models/Location');

exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addLocation = async (req, res) => {
  const { name, weekdayHours, weekendHours } = req.body;
  try {
    const newLocation = new Location({ name, weekdayHours, weekendHours });
    const location = await newLocation.save();
    res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, weekdayHours, weekendHours } = req.body;
  try {
    const location = await Location.findByIdAndUpdate(
      id,
      { name, weekdayHours, weekendHours },
      { new: true }
    );
    res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    await Location.findByIdAndDelete(id);
    res.json({ msg: 'Location removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};