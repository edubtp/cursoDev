function status(request, response) {
  response.status(200).json({ "client": "mandando Ver" });
}

export default status