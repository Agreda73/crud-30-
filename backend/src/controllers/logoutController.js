const logoutController = {};

logoutController.logout = async (req, res) => {
  res.clearCookie("authToken");

  return res.json({message: "Se cerro sesion"});
  };

export default logoutController;