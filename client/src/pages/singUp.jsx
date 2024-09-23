import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SingUp() {
  //1
  const [formData, setFormData] = useState({});
  //2
  const [errorMessages, setErrorMessages] = useState(null);
  //3
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  console.log(formData);
  //4
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessages(
        "Please fill out all fields. ha bu çizgiyi geçen"
      );
    }
    try {
      setLoading(true);
      setErrorMessages(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessages(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sing-up");
      }
    } catch (error) {
      setErrorMessages(error.message);
      setLoading(false);
    }
  };
  //5
  return (
    <div className=" min-h-screen mt-20">
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row  md:items-center gap-5">
        {/* left side */}
        <div className=" flex-1">
          <Link to="/" className="  font-semibold dark:text-white text-4xl ">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 rounded-lg text-white">
              Metin2
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5"> ha bu çizgiyi geçemen</p>
          {/* right side */}
        </div>
        <div className=" flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3"> Loading...</span>
                </>
              ) : (
                "Sing Up"
              )}
            </Link>
          </div>
          {errorMessages && (
            <Alert className="mt-5 " color="failure">
              {errorMessages}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
