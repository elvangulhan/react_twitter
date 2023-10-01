import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/action";
import { useAccount, useAccounts } from "~/store/auth/hooks"

export default function More(){

    const _account = useAccount();
    const accounts = useAccounts();

    return (
        <div>
            {accounts.map(account => (
                <button
                type="button"
                disabled={account.id == _account.id}
                onClick={() => {
                    setCurrentAccount(account)
                }} 
                className={classNames("py-3 px-4 flex text-left w-full transition-colors",{
                        "hover:bg-[#eff3f41a]": account.id != _account.id
                    })}>
                    <img src={account.avatar} className="w-10 h-10 rounded-full" />
                    <div className="mx-3 text-[15px]">
                        <h6 className=" font-bold">{account.fullname}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3" />
            <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] w-full transition-colors">
                Var olan bir hesap ekle 
            </button>
            <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] w-full transition-colors">
                Hesapları yönet
            </button>
            <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] w-full transition-colors">
                @syhbirkedi hesabından çıkış yap
            </button>
        </div>
    )
}