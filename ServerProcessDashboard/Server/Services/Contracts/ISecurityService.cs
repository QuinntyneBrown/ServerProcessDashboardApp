using ServerProcessDashboard.Server.Dto.v1;

namespace ServerProcessDashboard.Server.Services.Contracts
{
    public interface ISecurityService
    {
        void TryToUpdateUser(UserDto dto);

        void TryToAddUser(UserDto dto);

        void TryToChangePassword(ChangePasswordDto dto);
    }
}
