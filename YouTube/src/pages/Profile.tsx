import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router";

const Profile = () => {
  const { data } = useUser();
  const navigate = useNavigate();

  console.log(data?.data.data);

  function handleClick() {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-r from-gray-500 to-black-400 h-[100vh]">
      <div className="flex justify-center">
        <div className="h-[380px] w-[400px] bg-gray-50  mt-[240px] rounded-2xl">
          <div className="flex justify-center mt-[10px]">
            <div className="h-[100px] w-[100px] rounded-[50%] mt-[5px]">
              <img
                className="h-[100px] w-[100px] rounded-[50%]"
                src="https://images.unsplash.com/photo-1678329885908-85eb768aa61b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjB0aHVtYm5haWx8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </div>
          <div className="mt-[30px] ml-[30px]">
            <div className="flex flex-col gap-1 text-[22px]">
              <p className="font-bold">Name : {data?.data.data.channelName}</p>
              <p className="font-bold">Email : {data?.data.data.email}</p>
            </div>
          </div>
          <div className="mt-[30px] ml-[120px] h-[40px] w-[150px] bg-gray-300 flex justify-center items-center rounded-2xl">
            <button className="font-bold text-2xl " onClick={handleClick}>
              Logout
            </button>
          </div>
          <div className="mt-[20px] ml-[70px] h-[40px] w-[250px] bg-gray-300 flex justify-center items-center rounded-2xl">
            <button className="font-bold text-2xl " onClick={()=>navigate("/home")}>
              Go to the Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
