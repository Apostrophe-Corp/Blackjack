// Automatically generated with Reach 0.1.13 (c44a1544)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  bool _Some;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  uint256 _Some;
  }
struct T2 {
  bool _boughtInsurance;
  uint256 _cardCount;
  uint256 _cardValue;
  bool _doubledDown;
  bool _surrendered;
  }
enum _enum_T3 {None, Some}
struct T3 {
  _enum_T3 which;
  bool _None;
  T2 _Some;
  }
struct T4 {
  uint256 elem0;
  uint256 elem1;
  }
struct T5 {
  bool elem0;
  }
struct T6 {
  bool elem0;
  uint256 elem1;
  uint256 elem2;
  }
enum _enum_T7 {Dealer_submitHand0_113, Player_buyInsurance0_113, Player_doubleDown0_113, Player_getOutcome0_113, Player_placeBet0_113, Player_submitHand0_113, Player_surrender0_113}
struct T7 {
  _enum_T7 which;
  T4 _Dealer_submitHand0_113;
  T5 _Player_buyInsurance0_113;
  T5 _Player_doubleDown0_113;
  T5 _Player_getOutcome0_113;
  T5 _Player_placeBet0_113;
  T6 _Player_submitHand0_113;
  T6 _Player_surrender0_113;
  }
struct T8 {
  uint256 elem0;
  T7 elem1;
  }
struct T10 {
  address payable v2364;
  uint256 v2366;
  uint256 v2376;
  uint256 v2377;
  uint256 v2378;
  bool v2379;
  }
struct T11 {
  uint256 elem0;
  uint256 elem1;
  uint256 elem2;
  }
struct T12 {
  address payable v2364;
  uint256 v2365;
  uint256 v2366;
  }
struct T13 {
  uint256 elem0;
  }
struct T14 {
  address payable elem0;
  uint256 elem1;
  uint256 elem2;
  uint256 elem3;
  uint256 elem4;
  bool elem5;
  bool elem6;
  uint256 elem7;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  event _reach_e0(address _who, T11 _a);
  event _reach_e1(address _who, T13 _a);
  event _reach_e3(address _who, T8 _a);
  event _reach_oe_v10583(uint256 v0);
  event _reach_oe_v12009(bytes20 v0);
  event _reach_oe_v12077(bytes20 v0);
  event _reach_oe_v2366(uint256 v0);
  event _reach_oe_v2855(bool v0);
  event _reach_oe_v4234(uint256 v0);
  event _reach_oe_v4250(uint256 v0);
  event _reach_oe_v5636(uint256 v0);
  event _reach_oe_v5652(uint256 v0);
  event _reach_oe_v7077(bytes20 v0);
  event _reach_oe_v7162(bytes20 v0);
  event _reach_oe_v7248(bytes20 v0);
  event _reach_oe_v7340(bytes20 v0);
  event _reach_oe_v7424(bytes20 v0);
  event _reach_oe_v7516(bytes20 v0);
  event _reach_oe_v7600(bytes20 v0);
  event _reach_oe_v7689(bytes20 v0);
  event _reach_oe_v7773(bytes20 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (address => T0) _reachm_0;
  function __reachm_0Ref(address addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(address addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (address => T1) _reachm_1;
  function __reachm_1Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_1[addr].which == _enum_T1.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_1Ref(addr);
    }
  mapping (address => T1) _reachm_2;
  function __reachm_2Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_2[addr].which == _enum_T1.Some) {
      res = _reachm_2[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_2Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_2Ref(addr);
    }
  mapping (address => T3) _reachm_3;
  function __reachm_3Ref(address addr) internal view returns (T3 memory res) {
    if (_reachm_3[addr].which == _enum_T3.Some) {
      res = _reachm_3[addr];
      }
    else {
      res.which = _enum_T3.None;
      res._None = false;
      }
    }
  function _reachm_3Ref(address addr) external view returns (T3 memory res) {
    res = __reachm_3Ref(addr);
    }
  mapping (address => T3) _reachm_4;
  function __reachm_4Ref(address addr) internal view returns (T3 memory res) {
    if (_reachm_4[addr].which == _enum_T3.Some) {
      res = _reachm_4[addr];
      }
    else {
      res.which = _enum_T3.None;
      res._None = false;
      }
    }
  function _reachm_4Ref(address addr) external view returns (T3 memory res) {
    res = __reachm_4Ref(addr);
    }
  struct Memory {
    bool nil;
    bool _reachr_Dealer_submitHand;
    uint256 _reachr_Player_buyInsurance;
    uint256 _reachr_Player_doubleDown;
    bytes20 _reachr_Player_getOutcome;
    uint256 _reachr_Player_placeBet;
    uint256 _reachr_Player_submitHand;
    bytes20 _reachr_Player_surrender;
    uint256 _reachr_bank;
    }
  struct _F26286 {
    T4 v26228;
    T7 v26229;
    }
  function _reacha_Dealer_submitHand(T4 memory _a, Memory memory _Memory) internal  {
    _F26286 memory _f;
    _f.v26228.elem0 = _a.elem0;
    _f.v26228.elem1 = _a.elem1;
    _f.v26229.which = _enum_T7.Dealer_submitHand0_113;
    _f.v26229._Dealer_submitHand0_113 = _f.v26228;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v26229;
    _reachi_3(_ja, _Memory);
    }
  struct _F26287 {
    T5 v26235;
    T7 v26236;
    }
  function _reacha_Player_buyInsurance(bool _a, Memory memory _Memory) internal  {
    _F26287 memory _f;
    _f.v26235.elem0 = _a;
    _f.v26236.which = _enum_T7.Player_buyInsurance0_113;
    _f.v26236._Player_buyInsurance0_113 = _f.v26235;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v26236;
    _reachi_3(_ja, _Memory);
    }
  struct _F26288 {
    T5 v26241;
    T7 v26242;
    }
  function _reacha_Player_doubleDown(bool _a, Memory memory _Memory) internal  {
    _F26288 memory _f;
    _f.v26241.elem0 = _a;
    _f.v26242.which = _enum_T7.Player_doubleDown0_113;
    _f.v26242._Player_doubleDown0_113 = _f.v26241;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v26242;
    _reachi_3(_ja, _Memory);
    }
  struct _F26289 {
    T5 v26247;
    T7 v26248;
    }
  function _reacha_Player_getOutcome(bool _a, Memory memory _Memory) internal  {
    _F26289 memory _f;
    _f.v26247.elem0 = _a;
    _f.v26248.which = _enum_T7.Player_getOutcome0_113;
    _f.v26248._Player_getOutcome0_113 = _f.v26247;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v26248;
    _reachi_3(_ja, _Memory);
    }
  struct _F26290 {
    T5 v26253;
    T7 v26254;
    }
  function _reacha_Player_placeBet(bool _a, Memory memory _Memory) internal  {
    _F26290 memory _f;
    _f.v26253.elem0 = _a;
    _f.v26254.which = _enum_T7.Player_placeBet0_113;
    _f.v26254._Player_placeBet0_113 = _f.v26253;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v26254;
    _reachi_3(_ja, _Memory);
    }
  struct _F26291 {
    T6 v26261;
    T7 v26262;
    }
  function _reacha_Player_submitHand(T6 memory _a, Memory memory _Memory) internal  {
    _F26291 memory _f;
    _f.v26261.elem0 = _a.elem0;
    _f.v26261.elem1 = _a.elem1;
    _f.v26261.elem2 = _a.elem2;
    _f.v26262.which = _enum_T7.Player_submitHand0_113;
    _f.v26262._Player_submitHand0_113 = _f.v26261;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v26262;
    _reachi_3(_ja, _Memory);
    }
  struct _F26292 {
    T6 v26271;
    T7 v26272;
    }
  function _reacha_Player_surrender(T6 memory _a, Memory memory _Memory) internal  {
    _F26292 memory _f;
    _f.v26271.elem0 = _a.elem0;
    _f.v26271.elem1 = _a.elem1;
    _f.v26271.elem2 = _a.elem2;
    _f.v26272.which = _enum_T7.Player_surrender0_113;
    _f.v26272._Player_surrender0_113 = _f.v26271;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v26272;
    _reachi_3(_ja, _Memory);
    }
  function _reacha_bank(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(7) /*'(./index.rsh:129:21:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_bank = _svs.v2376;
    }
  function _reachi_0(T11 memory _a, Memory memory _Memory) internal  {
    reachRequire((! locked), uint256(8) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(9) /*'time check at ./index.rsh:137:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(10) /*'(./index.rsh:137:11:dot,[],"verify network token pay amount")'*/);
    T12 memory nsvs;
    nsvs.v2364 = payable(msg.sender);
    nsvs.v2365 = (_a.elem1);
    nsvs.v2366 = (_a.elem2);
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  function _reachi_1(T13 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(1)), uint256(11) /*'state check at ./index.rsh:139:11:dot'*/);
    (T12 memory _svs) = abi.decode(current_svbs, (T12));
    reachRequire((! locked), uint256(12) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(13) /*'time check at ./index.rsh:139:11:dot'*/);
    reachRequire((msg.value == _svs.v2365), uint256(14) /*'(./index.rsh:139:11:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v2364 == payable(msg.sender))), uint256(15) /*'(./index.rsh:139:11:dot,[],Just "sender correct")'*/);
    T14  memory _ja;
    _ja.elem0 = _svs.v2364;
    _ja.elem1 = _svs.v2366;
    _ja.elem2 = _svs.v2365;
    _ja.elem3 = uint256(0);
    _ja.elem4 = uint256(0);
    _ja.elem5 = false;
    _ja.elem6 = true;
    _ja.elem7 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    }
  struct _F26296 {
    T4 v2720;
    T5 v4066;
    T1 v4081;
    T3 v4087;
    T2 v4088;
    T2 v4090;
    T2 v4092;
    uint256 v4215;
    uint256 v4217;
    T2 v4221;
    T2 v4223;
    T2 v4225;
    uint256 v4234;
    T2 v4240;
    uint256 v4250;
    T2 v4256;
    T5 v5412;
    T1 v5450;
    T3 v5456;
    T2 v5457;
    T2 v5459;
    T2 v5461;
    uint256 v5617;
    uint256 v5619;
    T2 v5623;
    T2 v5625;
    T2 v5627;
    uint256 v5636;
    T2 v5642;
    uint256 v5652;
    T2 v5658;
    T5 v6758;
    T1 v6817;
    T1 v6818;
    T1 v6819;
    T3 v6823;
    T3 v6824;
    T3 v6825;
    T2 v6826;
    T2 v6828;
    T2 v6830;
    uint256 v7019;
    uint256 v7021;
    T2 v7025;
    T2 v7027;
    T2 v7029;
    uint256 v7046;
    bool v7048;
    bool v7052;
    bool v7054;
    bool v7057;
    uint256 v7070;
    bytes20 v7077;
    uint256 v7085;
    T1 v7086;
    T3 v7089;
    T1 v7131;
    T3 v7135;
    bytes20 v7162;
    uint256 v7170;
    T1 v7171;
    T3 v7174;
    T1 v7216;
    T3 v7220;
    bytes20 v7248;
    T1 v7255;
    T3 v7258;
    T1 v7300;
    T3 v7304;
    uint256 v7334;
    bytes20 v7340;
    uint256 v7347;
    T1 v7348;
    T3 v7351;
    T1 v7393;
    T3 v7397;
    bytes20 v7424;
    uint256 v7431;
    T1 v7432;
    T3 v7435;
    T1 v7477;
    T3 v7481;
    uint256 v7510;
    bytes20 v7516;
    uint256 v7523;
    T1 v7524;
    T3 v7527;
    T1 v7569;
    T3 v7573;
    bytes20 v7600;
    uint256 v7607;
    T1 v7608;
    T3 v7611;
    T1 v7653;
    T3 v7657;
    bytes20 v7689;
    uint256 v7696;
    T1 v7697;
    T3 v7700;
    T1 v7742;
    T3 v7746;
    bytes20 v7773;
    uint256 v7780;
    T1 v7781;
    T3 v7784;
    T1 v7826;
    T3 v7830;
    T5 v8104;
    T0 v9207;
    T2 v9210;
    T2 v9220;
    T6 v9450;
    T1 v9542;
    T3 v9548;
    uint256 v10583;
    uint256 v10585;
    T2 v10589;
    T2 v10591;
    T2 v10593;
    T2 v10606;
    T2 v10621;
    T6 v10796;
    T1 v10908;
    T1 v10909;
    T1 v10910;
    uint256 v10911;
    uint256 v10913;
    uint256 v11984;
    uint256 v11986;
    uint256 v11996;
    uint256 v11997;
    bytes20 v12007;
    bytes20 v12008;
    bytes20 v12009;
    T1 v12018;
    T3 v12021;
    uint256 v12035;
    uint256 v12041;
    T1 v12053;
    T3 v12057;
    uint256 v12063;
    uint256 v12069;
    bytes20 v12075;
    bytes20 v12076;
    bytes20 v12077;
    T1 v12086;
    T3 v12089;
    uint256 v12103;
    uint256 v12109;
    T1 v12121;
    T3 v12125;
    uint256 v12131;
    uint256 v12137;
    }
  function _reachi_3(T8 memory _a, Memory memory _Memory) internal  {
    _F26296 memory _f;
    reachRequire((current_step == uint256(4)), uint256(16) /*'state check at ./index.rsh:168:84:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(17) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(18) /*'time check at ./index.rsh:168:84:dot'*/);
    if ((_a.elem1).which == _enum_T7.Dealer_submitHand0_113) {
    _f.v2720 = (_a.elem1)._Dealer_submitHand0_113;
    reachRequire(((((_f.v2720.elem1) > uint256(0)) ? ((_f.v2720.elem0) > uint256(0)) : false)), uint256(19) /*'(reach standard library:57:5:application,[at ./index.rsh:460:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:459:65:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "Invalid submission")'*/);
    reachRequire((msg.value == uint256(0)), uint256(20) /*'(./index.rsh:168:84:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v2855( (false));
    _Memory._reachr_Dealer_submitHand = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v2364;
    _ja.elem1 = _svs.v2366;
    _ja.elem2 = _svs.v2376;
    _ja.elem3 = (_f.v2720.elem1);
    _ja.elem4 = (_f.v2720.elem0);
    _ja.elem5 = true;
    _ja.elem6 = true;
    _ja.elem7 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T7.Player_buyInsurance0_113) {
    _f.v4066 = (_a.elem1)._Player_buyInsurance0_113;
    _f.v4081 = (_f.v4066.elem0) ? (__reachm_1Ref(payable(msg.sender))) : (__reachm_2Ref(payable(msg.sender)));
    _f.v4087 = (_f.v4066.elem0) ? (__reachm_3Ref(payable(msg.sender))) : (__reachm_4Ref(payable(msg.sender)));
    if (_f.v4087.which == _enum_T3.None) {
    _f.v4090._boughtInsurance = false;
    _f.v4090._cardCount = uint256(0);
    _f.v4090._cardValue = uint256(0);
    _f.v4090._doubledDown = false;
    _f.v4090._surrendered = false;
    _f.v4088 = _f.v4090;
    } else if (_f.v4087.which == _enum_T3.Some) {
    _f.v4092 = _f.v4087._Some;
    _f.v4088 = _f.v4092;
    }
    reachRequire((((uint256((__reachm_0Ref(payable(msg.sender))).which)) == uint256(1))), uint256(21) /*'(reach standard library:57:5:application,[at ./index.rsh:263:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You did not place a bet on this game")'*/);
    reachRequire((((_f.v4088._boughtInsurance) ? false : true)), uint256(22) /*'(reach standard library:57:5:application,[at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You cannot buy insurance twice")'*/);
    reachRequire((msg.value == _svs.v2366), uint256(23) /*'(./index.rsh:168:84:dot,[],"verify network token pay amount")'*/);
    if (_f.v4081.which == _enum_T1.None) {
    _f.v4215 = uint256(0);
    } else if (_f.v4081.which == _enum_T1.Some) {
    _f.v4217 = _f.v4081._Some;
    _f.v4215 = _f.v4217;
    }
    if (_f.v4087.which == _enum_T3.None) {
    _f.v4223._boughtInsurance = false;
    _f.v4223._cardCount = uint256(0);
    _f.v4223._cardValue = uint256(0);
    _f.v4223._doubledDown = false;
    _f.v4223._surrendered = false;
    _f.v4221 = _f.v4223;
    } else if (_f.v4087.which == _enum_T3.Some) {
    _f.v4225 = _f.v4087._Some;
    _f.v4221 = _f.v4225;
    }
    reachRequire((((_f.v4221._boughtInsurance) ? false : true)), uint256(24) /*'(reach standard library:57:5:application,[at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:267:39:application call to [unknown function] (defined at: ./index.rsh:267:39:function exp)],Just "You cannot buy insurance twice")'*/);
    if ((_f.v4066.elem0)) {
      _f.v4234 = safeAdd(_svs.v2366, _f.v4215);
      _reachm_1[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_1[payable(msg.sender)]._Some = _f.v4234;
      
      _f.v4240._boughtInsurance = true;
      _f.v4240._cardCount = (_f.v4221._cardCount);
      _f.v4240._cardValue = (_f.v4221._cardValue);
      _f.v4240._doubledDown = (_f.v4221._doubledDown);
      _f.v4240._surrendered = (_f.v4221._surrendered);
      _reachm_3[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_3[payable(msg.sender)]._Some = _f.v4240;
      
      emit _reach_oe_v4234( _f.v4234);
      _Memory._reachr_Player_buyInsurance = _f.v4234;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = (safeAdd(_svs.v2376, _svs.v2366));
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    else {
      _f.v4250 = safeAdd(_svs.v2366, _f.v4215);
      _reachm_2[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_2[payable(msg.sender)]._Some = _f.v4250;
      
      _f.v4256._boughtInsurance = true;
      _f.v4256._cardCount = (_f.v4221._cardCount);
      _f.v4256._cardValue = (_f.v4221._cardValue);
      _f.v4256._doubledDown = (_f.v4221._doubledDown);
      _f.v4256._surrendered = (_f.v4221._surrendered);
      _reachm_4[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_4[payable(msg.sender)]._Some = _f.v4256;
      
      emit _reach_oe_v4250( _f.v4250);
      _Memory._reachr_Player_buyInsurance = _f.v4250;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = (safeAdd(_svs.v2376, _svs.v2366));
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T7.Player_doubleDown0_113) {
    _f.v5412 = (_a.elem1)._Player_doubleDown0_113;
    _f.v5450 = (_f.v5412.elem0) ? (__reachm_1Ref(payable(msg.sender))) : (__reachm_2Ref(payable(msg.sender)));
    _f.v5456 = (_f.v5412.elem0) ? (__reachm_3Ref(payable(msg.sender))) : (__reachm_4Ref(payable(msg.sender)));
    if (_f.v5456.which == _enum_T3.None) {
    _f.v5459._boughtInsurance = false;
    _f.v5459._cardCount = uint256(0);
    _f.v5459._cardValue = uint256(0);
    _f.v5459._doubledDown = false;
    _f.v5459._surrendered = false;
    _f.v5457 = _f.v5459;
    } else if (_f.v5456.which == _enum_T3.Some) {
    _f.v5461 = _f.v5456._Some;
    _f.v5457 = _f.v5461;
    }
    reachRequire((((uint256((__reachm_0Ref(payable(msg.sender))).which)) == uint256(1))), uint256(25) /*'(reach standard library:57:5:application,[at ./index.rsh:227:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You did not place a bet on this game")'*/);
    reachRequire((((_f.v5457._doubledDown) ? false : true)), uint256(26) /*'(reach standard library:57:5:application,[at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You cannot double down twice")'*/);
    reachRequire((msg.value == _svs.v2366), uint256(27) /*'(./index.rsh:168:84:dot,[],"verify network token pay amount")'*/);
    if (_f.v5450.which == _enum_T1.None) {
    _f.v5617 = uint256(0);
    } else if (_f.v5450.which == _enum_T1.Some) {
    _f.v5619 = _f.v5450._Some;
    _f.v5617 = _f.v5619;
    }
    if (_f.v5456.which == _enum_T3.None) {
    _f.v5625._boughtInsurance = false;
    _f.v5625._cardCount = uint256(0);
    _f.v5625._cardValue = uint256(0);
    _f.v5625._doubledDown = false;
    _f.v5625._surrendered = false;
    _f.v5623 = _f.v5625;
    } else if (_f.v5456.which == _enum_T3.Some) {
    _f.v5627 = _f.v5456._Some;
    _f.v5623 = _f.v5627;
    }
    reachRequire((((_f.v5623._doubledDown) ? false : true)), uint256(28) /*'(reach standard library:57:5:application,[at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:231:39:application call to [unknown function] (defined at: ./index.rsh:231:39:function exp)],Just "You cannot double down twice")'*/);
    if ((_f.v5412.elem0)) {
      _f.v5636 = safeAdd(_svs.v2366, _f.v5617);
      _reachm_1[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_1[payable(msg.sender)]._Some = _f.v5636;
      
      _f.v5642._boughtInsurance = (_f.v5623._boughtInsurance);
      _f.v5642._cardCount = (_f.v5623._cardCount);
      _f.v5642._cardValue = (_f.v5623._cardValue);
      _f.v5642._doubledDown = true;
      _f.v5642._surrendered = (_f.v5623._surrendered);
      _reachm_3[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_3[payable(msg.sender)]._Some = _f.v5642;
      
      emit _reach_oe_v5636( _f.v5636);
      _Memory._reachr_Player_doubleDown = _f.v5636;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = (safeAdd(_svs.v2376, _svs.v2366));
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    else {
      _f.v5652 = safeAdd(_svs.v2366, _f.v5617);
      _reachm_2[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_2[payable(msg.sender)]._Some = _f.v5652;
      
      _f.v5658._boughtInsurance = (_f.v5623._boughtInsurance);
      _f.v5658._cardCount = (_f.v5623._cardCount);
      _f.v5658._cardValue = (_f.v5623._cardValue);
      _f.v5658._doubledDown = true;
      _f.v5658._surrendered = (_f.v5623._surrendered);
      _reachm_4[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_4[payable(msg.sender)]._Some = _f.v5658;
      
      emit _reach_oe_v5652( _f.v5652);
      _Memory._reachr_Player_doubleDown = _f.v5652;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = (safeAdd(_svs.v2376, _svs.v2366));
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T7.Player_getOutcome0_113) {
    _f.v6758 = (_a.elem1)._Player_getOutcome0_113;
    _f.v6817 = __reachm_1Ref(payable(msg.sender));
    _f.v6818 = __reachm_2Ref(payable(msg.sender));
    _f.v6819 = (_f.v6758.elem0) ? _f.v6817 : _f.v6818;
    _f.v6823 = __reachm_3Ref(payable(msg.sender));
    _f.v6824 = __reachm_4Ref(payable(msg.sender));
    _f.v6825 = (_f.v6758.elem0) ? _f.v6823 : _f.v6824;
    if (_f.v6825.which == _enum_T3.None) {
    _f.v6828._boughtInsurance = false;
    _f.v6828._cardCount = uint256(0);
    _f.v6828._cardValue = uint256(0);
    _f.v6828._doubledDown = false;
    _f.v6828._surrendered = false;
    _f.v6826 = _f.v6828;
    } else if (_f.v6825.which == _enum_T3.Some) {
    _f.v6830 = _f.v6825._Some;
    _f.v6826 = _f.v6830;
    }
    reachRequire((((uint256((__reachm_0Ref(payable(msg.sender))).which)) == uint256(1))), uint256(29) /*'(reach standard library:57:5:application,[at ./index.rsh:365:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You did not place a bet on this game")'*/);
    reachRequire((_svs.v2379), uint256(30) /*'(reach standard library:57:5:application,[at ./index.rsh:366:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "The Dealer is yet to submit his hand")'*/);
    reachRequire(((((_f.v6826._cardCount) > uint256(0)) ? ((_f.v6826._cardValue) > uint256(0)) : false)), uint256(31) /*'(reach standard library:57:5:application,[at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "Invalid submission")'*/);
    reachRequire((msg.value == uint256(0)), uint256(32) /*'(./index.rsh:168:84:dot,[],"verify network token pay amount")'*/);
    if (_f.v6819.which == _enum_T1.None) {
    _f.v7019 = uint256(0);
    } else if (_f.v6819.which == _enum_T1.Some) {
    _f.v7021 = _f.v6819._Some;
    _f.v7019 = _f.v7021;
    }
    if (_f.v6825.which == _enum_T3.None) {
    _f.v7027._boughtInsurance = false;
    _f.v7027._cardCount = uint256(0);
    _f.v7027._cardValue = uint256(0);
    _f.v7027._doubledDown = false;
    _f.v7027._surrendered = false;
    _f.v7025 = _f.v7027;
    } else if (_f.v6825.which == _enum_T3.Some) {
    _f.v7029 = _f.v6825._Some;
    _f.v7025 = _f.v7029;
    }
    reachRequire(((((_f.v7025._cardCount) > uint256(0)) ? ((_f.v7025._cardValue) > uint256(0)) : false)), uint256(33) /*'(reach standard library:57:5:application,[at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)],Just "Invalid submission")'*/);
    _f.v7048 = _svs.v2377 == uint256(2);
    _f.v7052 = (_f.v7025._cardValue) == uint256(21);
    _f.v7054 = (_f.v7025._cardValue) < uint256(22);
    _f.v7057 = _f.v7052 ? ((_f.v7025._cardCount) == uint256(2)) : false;
    _f.v7046 = (_svs.v2378 == uint256(21)) ? (((_f.v7025._boughtInsurance) ? _f.v7048 : false) ? uint256(3) : (((_f.v7025._surrendered) ? _f.v7048 : false) ? uint256(5) : (_f.v7052 ? uint256(2) : uint256(1)))) : ((_f.v7025._surrendered) ? uint256(1) : ((_svs.v2378 > uint256(21)) ? (_f.v7054 ? (_f.v7057 ? uint256(4) : uint256(0)) : uint256(1)) : ((_svs.v2378 < uint256(21)) ? ((_svs.v2378 > (_f.v7025._cardValue)) ? uint256(1) : (((_f.v7025._cardValue) > _svs.v2378) ? (_f.v7057 ? uint256(4) : (_f.v7054 ? uint256(0) : uint256(1))) : (((_f.v7025._cardValue) == _svs.v2378) ? uint256(2) : uint256(1)))) : uint256(1))));
    if ((_f.v7046 == uint256(0))) {
      _f.v7070 = safeMul((safeSub(_f.v7019, ((_f.v7025._boughtInsurance) ? _svs.v2366 : uint256(0)))), uint256(2));
      if ((_svs.v2376 >= _f.v7070)) {
        payable(msg.sender).transfer(_f.v7070);
        _f.v7077 = hex'506c617965722057696e73000000000000000000';
        emit _reach_oe_v7077( _f.v7077);
        _Memory._reachr_Player_getOutcome = _f.v7077;
        _f.v7085 = safeSub(_svs.v2376, _f.v7070);
        if ((_f.v6758.elem0)) {
          delete _reachm_1[payable(msg.sender)];
          delete _reachm_3[payable(msg.sender)];
          _f.v7086.which = _enum_T1.None;
          _f.v7086._None = false;
          _f.v7089.which = _enum_T3.None;
          _f.v7089._None = false;
          if ((((((uint256(_f.v7086.which)) == uint256(0)) ? ((uint256(_f.v7089.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
            delete _reachm_0[payable(msg.sender)];
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7085;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7085 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          else {
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7085;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7085 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          }
        else {
          delete _reachm_2[payable(msg.sender)];
          delete _reachm_4[payable(msg.sender)];
          _f.v7131.which = _enum_T1.None;
          _f.v7131._None = false;
          _f.v7135.which = _enum_T3.None;
          _f.v7135._None = false;
          if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7131.which)) == uint256(0)) : false) ? ((uint256(_f.v7135.which)) == uint256(0)) : false)) {
            delete _reachm_0[payable(msg.sender)];
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7085;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7085 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          else {
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7085;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7085 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          }
        }
      else {
        _f.v7162 = hex'506c617965722057696e73000000000000000000';
        emit _reach_oe_v7162( _f.v7162);
        _Memory._reachr_Player_getOutcome = _f.v7162;
        _f.v7170 = safeSub(_svs.v2376, _f.v7070);
        if ((_f.v6758.elem0)) {
          delete _reachm_1[payable(msg.sender)];
          delete _reachm_3[payable(msg.sender)];
          _f.v7171.which = _enum_T1.None;
          _f.v7171._None = false;
          _f.v7174.which = _enum_T3.None;
          _f.v7174._None = false;
          if ((((((uint256(_f.v7171.which)) == uint256(0)) ? ((uint256(_f.v7174.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
            delete _reachm_0[payable(msg.sender)];
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7170;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7170 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          else {
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7170;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7170 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          }
        else {
          delete _reachm_2[payable(msg.sender)];
          delete _reachm_4[payable(msg.sender)];
          _f.v7216.which = _enum_T1.None;
          _f.v7216._None = false;
          _f.v7220.which = _enum_T3.None;
          _f.v7220._None = false;
          if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7216.which)) == uint256(0)) : false) ? ((uint256(_f.v7220.which)) == uint256(0)) : false)) {
            delete _reachm_0[payable(msg.sender)];
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7170;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7170 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          else {
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _f.v7170;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_f.v7170 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          }
        }
      }
    else {
      if ((_f.v7046 == uint256(1))) {
        _f.v7248 = hex'4465616c65722057696e73000000000000000000';
        emit _reach_oe_v7248( _f.v7248);
        _Memory._reachr_Player_getOutcome = _f.v7248;
        if ((_f.v6758.elem0)) {
          delete _reachm_1[payable(msg.sender)];
          delete _reachm_3[payable(msg.sender)];
          _f.v7255.which = _enum_T1.None;
          _f.v7255._None = false;
          _f.v7258.which = _enum_T3.None;
          _f.v7258._None = false;
          if ((((((uint256(_f.v7255.which)) == uint256(0)) ? ((uint256(_f.v7258.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
            delete _reachm_0[payable(msg.sender)];
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _svs.v2376;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_svs.v2376 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          else {
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _svs.v2376;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_svs.v2376 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          }
        else {
          delete _reachm_2[payable(msg.sender)];
          delete _reachm_4[payable(msg.sender)];
          _f.v7300.which = _enum_T1.None;
          _f.v7300._None = false;
          _f.v7304.which = _enum_T3.None;
          _f.v7304._None = false;
          if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7300.which)) == uint256(0)) : false) ? ((uint256(_f.v7304.which)) == uint256(0)) : false)) {
            delete _reachm_0[payable(msg.sender)];
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _svs.v2376;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_svs.v2376 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          else {
            T14  memory _ja;
            _ja.elem0 = _svs.v2364;
            _ja.elem1 = _svs.v2366;
            _ja.elem2 = _svs.v2376;
            _ja.elem3 = _svs.v2377;
            _ja.elem4 = _svs.v2378;
            _ja.elem5 = true;
            _ja.elem6 = (_svs.v2376 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
            _ja.elem7 = uint256(block.number);
            _reachl_2(_ja, _Memory);
            }
          }
        }
      else {
        if ((_f.v7046 == uint256(2))) {
          _f.v7334 = safeSub(_f.v7019, ((_f.v7025._boughtInsurance) ? _svs.v2366 : uint256(0)));
          if ((_svs.v2376 >= _f.v7334)) {
            payable(msg.sender).transfer(_f.v7334);
            _f.v7340 = hex'5075736800000000000000000000000000000000';
            emit _reach_oe_v7340( _f.v7340);
            _Memory._reachr_Player_getOutcome = _f.v7340;
            _f.v7347 = safeSub(_svs.v2376, _f.v7334);
            if ((_f.v6758.elem0)) {
              delete _reachm_1[payable(msg.sender)];
              delete _reachm_3[payable(msg.sender)];
              _f.v7348.which = _enum_T1.None;
              _f.v7348._None = false;
              _f.v7351.which = _enum_T3.None;
              _f.v7351._None = false;
              if ((((((uint256(_f.v7348.which)) == uint256(0)) ? ((uint256(_f.v7351.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
                delete _reachm_0[payable(msg.sender)];
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7347;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7347 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              else {
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7347;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7347 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              }
            else {
              delete _reachm_2[payable(msg.sender)];
              delete _reachm_4[payable(msg.sender)];
              _f.v7393.which = _enum_T1.None;
              _f.v7393._None = false;
              _f.v7397.which = _enum_T3.None;
              _f.v7397._None = false;
              if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7393.which)) == uint256(0)) : false) ? ((uint256(_f.v7397.which)) == uint256(0)) : false)) {
                delete _reachm_0[payable(msg.sender)];
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7347;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7347 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              else {
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7347;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7347 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              }
            }
          else {
            _f.v7424 = hex'5075736800000000000000000000000000000000';
            emit _reach_oe_v7424( _f.v7424);
            _Memory._reachr_Player_getOutcome = _f.v7424;
            _f.v7431 = safeSub(_svs.v2376, _f.v7334);
            if ((_f.v6758.elem0)) {
              delete _reachm_1[payable(msg.sender)];
              delete _reachm_3[payable(msg.sender)];
              _f.v7432.which = _enum_T1.None;
              _f.v7432._None = false;
              _f.v7435.which = _enum_T3.None;
              _f.v7435._None = false;
              if ((((((uint256(_f.v7432.which)) == uint256(0)) ? ((uint256(_f.v7435.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
                delete _reachm_0[payable(msg.sender)];
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7431;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7431 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              else {
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7431;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7431 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              }
            else {
              delete _reachm_2[payable(msg.sender)];
              delete _reachm_4[payable(msg.sender)];
              _f.v7477.which = _enum_T1.None;
              _f.v7477._None = false;
              _f.v7481.which = _enum_T3.None;
              _f.v7481._None = false;
              if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7477.which)) == uint256(0)) : false) ? ((uint256(_f.v7481.which)) == uint256(0)) : false)) {
                delete _reachm_0[payable(msg.sender)];
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7431;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7431 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              else {
                T14  memory _ja;
                _ja.elem0 = _svs.v2364;
                _ja.elem1 = _svs.v2366;
                _ja.elem2 = _f.v7431;
                _ja.elem3 = _svs.v2377;
                _ja.elem4 = _svs.v2378;
                _ja.elem5 = true;
                _ja.elem6 = (_f.v7431 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                _ja.elem7 = uint256(block.number);
                _reachl_2(_ja, _Memory);
                }
              }
            }
          }
        else {
          if ((_f.v7046 == uint256(4))) {
            _f.v7510 = safeMul((safeDiv(_f.v7019, uint256(100))), uint256(250));
            if ((_svs.v2376 >= _f.v7510)) {
              payable(msg.sender).transfer(_f.v7510);
              _f.v7516 = hex'426c61636b6a61636b0000000000000000000000';
              emit _reach_oe_v7516( _f.v7516);
              _Memory._reachr_Player_getOutcome = _f.v7516;
              _f.v7523 = safeSub(_svs.v2376, _f.v7510);
              if ((_f.v6758.elem0)) {
                delete _reachm_1[payable(msg.sender)];
                delete _reachm_3[payable(msg.sender)];
                _f.v7524.which = _enum_T1.None;
                _f.v7524._None = false;
                _f.v7527.which = _enum_T3.None;
                _f.v7527._None = false;
                if ((((((uint256(_f.v7524.which)) == uint256(0)) ? ((uint256(_f.v7527.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7523;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7523 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7523;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7523 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              else {
                delete _reachm_2[payable(msg.sender)];
                delete _reachm_4[payable(msg.sender)];
                _f.v7569.which = _enum_T1.None;
                _f.v7569._None = false;
                _f.v7573.which = _enum_T3.None;
                _f.v7573._None = false;
                if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7569.which)) == uint256(0)) : false) ? ((uint256(_f.v7573.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7523;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7523 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7523;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7523 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              }
            else {
              _f.v7600 = hex'426c61636b6a61636b0000000000000000000000';
              emit _reach_oe_v7600( _f.v7600);
              _Memory._reachr_Player_getOutcome = _f.v7600;
              _f.v7607 = safeSub(_svs.v2376, _f.v7510);
              if ((_f.v6758.elem0)) {
                delete _reachm_1[payable(msg.sender)];
                delete _reachm_3[payable(msg.sender)];
                _f.v7608.which = _enum_T1.None;
                _f.v7608._None = false;
                _f.v7611.which = _enum_T3.None;
                _f.v7611._None = false;
                if ((((((uint256(_f.v7608.which)) == uint256(0)) ? ((uint256(_f.v7611.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7607;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7607 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7607;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7607 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              else {
                delete _reachm_2[payable(msg.sender)];
                delete _reachm_4[payable(msg.sender)];
                _f.v7653.which = _enum_T1.None;
                _f.v7653._None = false;
                _f.v7657.which = _enum_T3.None;
                _f.v7657._None = false;
                if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7653.which)) == uint256(0)) : false) ? ((uint256(_f.v7657.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7607;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7607 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7607;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7607 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              }
            }
          else {
            if ((_svs.v2376 >= _f.v7019)) {
              payable(msg.sender).transfer(_f.v7019);
              _f.v7689 = hex'5265747269657665000000000000000000000000';
              emit _reach_oe_v7689( _f.v7689);
              _Memory._reachr_Player_getOutcome = _f.v7689;
              _f.v7696 = safeSub(_svs.v2376, _f.v7019);
              if ((_f.v6758.elem0)) {
                delete _reachm_1[payable(msg.sender)];
                delete _reachm_3[payable(msg.sender)];
                _f.v7697.which = _enum_T1.None;
                _f.v7697._None = false;
                _f.v7700.which = _enum_T3.None;
                _f.v7700._None = false;
                if ((((((uint256(_f.v7697.which)) == uint256(0)) ? ((uint256(_f.v7700.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7696;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7696 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7696;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7696 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              else {
                delete _reachm_2[payable(msg.sender)];
                delete _reachm_4[payable(msg.sender)];
                _f.v7742.which = _enum_T1.None;
                _f.v7742._None = false;
                _f.v7746.which = _enum_T3.None;
                _f.v7746._None = false;
                if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7742.which)) == uint256(0)) : false) ? ((uint256(_f.v7746.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7696;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7696 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7696;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7696 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              }
            else {
              _f.v7773 = hex'5265747269657665000000000000000000000000';
              emit _reach_oe_v7773( _f.v7773);
              _Memory._reachr_Player_getOutcome = _f.v7773;
              _f.v7780 = safeSub(_svs.v2376, _f.v7019);
              if ((_f.v6758.elem0)) {
                delete _reachm_1[payable(msg.sender)];
                delete _reachm_3[payable(msg.sender)];
                _f.v7781.which = _enum_T1.None;
                _f.v7781._None = false;
                _f.v7784.which = _enum_T3.None;
                _f.v7784._None = false;
                if ((((((uint256(_f.v7781.which)) == uint256(0)) ? ((uint256(_f.v7784.which)) == uint256(0)) : false) ? ((uint256(_f.v6818.which)) == uint256(0)) : false) ? ((uint256(_f.v6824.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7780;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7780 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7780;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7780 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              else {
                delete _reachm_2[payable(msg.sender)];
                delete _reachm_4[payable(msg.sender)];
                _f.v7826.which = _enum_T1.None;
                _f.v7826._None = false;
                _f.v7830.which = _enum_T3.None;
                _f.v7830._None = false;
                if ((((((uint256(_f.v6817.which)) == uint256(0)) ? ((uint256(_f.v6823.which)) == uint256(0)) : false) ? ((uint256(_f.v7826.which)) == uint256(0)) : false) ? ((uint256(_f.v7830.which)) == uint256(0)) : false)) {
                  delete _reachm_0[payable(msg.sender)];
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7780;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7780 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                else {
                  T14  memory _ja;
                  _ja.elem0 = _svs.v2364;
                  _ja.elem1 = _svs.v2366;
                  _ja.elem2 = _f.v7780;
                  _ja.elem3 = _svs.v2377;
                  _ja.elem4 = _svs.v2378;
                  _ja.elem5 = true;
                  _ja.elem6 = (_f.v7780 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
                  _ja.elem7 = uint256(block.number);
                  _reachl_2(_ja, _Memory);
                  }
                }
              }
            }
          }
        }
      }
    } else if ((_a.elem1).which == _enum_T7.Player_placeBet0_113) {
    _f.v8104 = (_a.elem1)._Player_placeBet0_113;
    reachRequire((msg.value == _svs.v2366), uint256(34) /*'(./index.rsh:168:84:dot,[],"verify network token pay amount")'*/);
    _reachm_0[payable(msg.sender)].which = _enum_T0.Some;
    _reachm_0[payable(msg.sender)]._Some = false;
    
    _f.v9207.which = _enum_T0.Some;
    _f.v9207._Some = false;
    reachRequire((((uint256(_f.v9207.which)) == uint256(1))), uint256(35) /*'(./index.rsh:201:48:application,[at ./index.rsh:199:39:application call to [unknown function] (defined at: ./index.rsh:199:39:function exp)],Nothing)'*/);
    if ((_f.v8104.elem0)) {
      _reachm_1[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_1[payable(msg.sender)]._Some = _svs.v2366;
      
      _f.v9210._boughtInsurance = false;
      _f.v9210._cardCount = uint256(0);
      _f.v9210._cardValue = uint256(0);
      _f.v9210._doubledDown = false;
      _f.v9210._surrendered = false;
      _reachm_3[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_3[payable(msg.sender)]._Some = _f.v9210;
      
      _reachm_4[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_4[payable(msg.sender)]._Some = _f.v9210;
      
      emit _reach_oe_v2366( _svs.v2366);
      _Memory._reachr_Player_placeBet = _svs.v2366;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = (safeAdd(_svs.v2376, _svs.v2366));
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    else {
      _reachm_2[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_2[payable(msg.sender)]._Some = _svs.v2366;
      
      _f.v9220._boughtInsurance = false;
      _f.v9220._cardCount = uint256(0);
      _f.v9220._cardValue = uint256(0);
      _f.v9220._doubledDown = false;
      _f.v9220._surrendered = false;
      _reachm_3[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_3[payable(msg.sender)]._Some = _f.v9220;
      
      _reachm_4[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_4[payable(msg.sender)]._Some = _f.v9220;
      
      emit _reach_oe_v2366( _svs.v2366);
      _Memory._reachr_Player_placeBet = _svs.v2366;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = (safeAdd(_svs.v2376, _svs.v2366));
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T7.Player_submitHand0_113) {
    _f.v9450 = (_a.elem1)._Player_submitHand0_113;
    _f.v9542 = (_f.v9450.elem0) ? (__reachm_1Ref(payable(msg.sender))) : (__reachm_2Ref(payable(msg.sender)));
    _f.v9548 = (_f.v9450.elem0) ? (__reachm_3Ref(payable(msg.sender))) : (__reachm_4Ref(payable(msg.sender)));
    reachRequire((((uint256((__reachm_0Ref(payable(msg.sender))).which)) == uint256(1))), uint256(36) /*'(reach standard library:57:5:application,[at ./index.rsh:336:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:329:78:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You did not place a bet on this game")'*/);
    reachRequire((msg.value == uint256(0)), uint256(37) /*'(./index.rsh:168:84:dot,[],"verify network token pay amount")'*/);
    if (_f.v9542.which == _enum_T1.None) {
    _f.v10583 = uint256(0);
    } else if (_f.v9542.which == _enum_T1.Some) {
    _f.v10585 = _f.v9542._Some;
    _f.v10583 = _f.v10585;
    }
    if (_f.v9548.which == _enum_T3.None) {
    _f.v10591._boughtInsurance = false;
    _f.v10591._cardCount = uint256(0);
    _f.v10591._cardValue = uint256(0);
    _f.v10591._doubledDown = false;
    _f.v10591._surrendered = false;
    _f.v10589 = _f.v10591;
    } else if (_f.v9548.which == _enum_T3.Some) {
    _f.v10593 = _f.v9548._Some;
    _f.v10589 = _f.v10593;
    }
    if ((_f.v9450.elem0)) {
      _f.v10606._boughtInsurance = (_f.v10589._boughtInsurance);
      _f.v10606._cardCount = (_f.v9450.elem2);
      _f.v10606._cardValue = (_f.v9450.elem1);
      _f.v10606._doubledDown = (_f.v10589._doubledDown);
      _f.v10606._surrendered = (_f.v10589._surrendered);
      _reachm_3[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_3[payable(msg.sender)]._Some = _f.v10606;
      
      emit _reach_oe_v10583( _f.v10583);
      _Memory._reachr_Player_submitHand = _f.v10583;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = _svs.v2376;
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    else {
      _f.v10621._boughtInsurance = (_f.v10589._boughtInsurance);
      _f.v10621._cardCount = (_f.v9450.elem2);
      _f.v10621._cardValue = (_f.v9450.elem1);
      _f.v10621._doubledDown = (_f.v10589._doubledDown);
      _f.v10621._surrendered = (_f.v10589._surrendered);
      _reachm_4[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_4[payable(msg.sender)]._Some = _f.v10621;
      
      emit _reach_oe_v10583( _f.v10583);
      _Memory._reachr_Player_submitHand = _f.v10583;
      T14  memory _ja;
      _ja.elem0 = _svs.v2364;
      _ja.elem1 = _svs.v2366;
      _ja.elem2 = _svs.v2376;
      _ja.elem3 = _svs.v2377;
      _ja.elem4 = _svs.v2378;
      _ja.elem5 = _svs.v2379;
      _ja.elem6 = true;
      _ja.elem7 = uint256(block.number);
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T7.Player_surrender0_113) {
    _f.v10796 = (_a.elem1)._Player_surrender0_113;
    _f.v10908 = __reachm_1Ref(payable(msg.sender));
    _f.v10909 = __reachm_2Ref(payable(msg.sender));
    _f.v10910 = (_f.v10796.elem0) ? _f.v10908 : _f.v10909;
    if (_f.v10910.which == _enum_T1.None) {
    _f.v10911 = uint256(0);
    } else if (_f.v10910.which == _enum_T1.Some) {
    _f.v10913 = _f.v10910._Some;
    _f.v10911 = _f.v10913;
    }
    reachRequire((((uint256((__reachm_0Ref(payable(msg.sender))).which)) == uint256(1))), uint256(38) /*'(reach standard library:57:5:application,[at ./index.rsh:296:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You did not place a bet on this game")'*/);
    reachRequire(((_f.v10911 == _svs.v2366)), uint256(39) /*'(reach standard library:57:5:application,[at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp),at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)],Just "You are not allowed to surrender at this point")'*/);
    reachRequire((msg.value == uint256(0)), uint256(40) /*'(./index.rsh:168:84:dot,[],"verify network token pay amount")'*/);
    if (_f.v10910.which == _enum_T1.None) {
    _f.v11984 = uint256(0);
    } else if (_f.v10910.which == _enum_T1.Some) {
    _f.v11986 = _f.v10910._Some;
    _f.v11984 = _f.v11986;
    }
    reachRequire(((_f.v11984 == _svs.v2366)), uint256(41) /*'(reach standard library:57:5:application,[at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:303:39:application call to [unknown function] (defined at: ./index.rsh:303:39:function exp)],Just "You are not allowed to surrender at this point")'*/);
    _f.v11996 = safeDiv(_f.v11984, uint256(2));
    _f.v11997 = (_svs.v2378 == uint256(21)) ? ((_svs.v2377 == uint256(2)) ? uint256(5) : (((_f.v10796.elem1) == uint256(21)) ? uint256(2) : uint256(1))) : uint256(1);
    if ((_svs.v2376 >= _f.v11996)) {
      payable(msg.sender).transfer(_f.v11996);
      _f.v12007 = hex'4465616c65722057696e73000000000000000000';
      _f.v12008 = hex'456e640000000000000000000000000000000000';
      _f.v12009 = (_f.v11997 == uint256(1)) ? _f.v12007 : _f.v12008;
      emit _reach_oe_v12009( _f.v12009);
      _Memory._reachr_Player_surrender = _f.v12009;
      if ((_f.v10796.elem0)) {
        delete _reachm_1[payable(msg.sender)];
        delete _reachm_3[payable(msg.sender)];
        _f.v12018.which = _enum_T1.None;
        _f.v12018._None = false;
        _f.v12021.which = _enum_T3.None;
        _f.v12021._None = false;
        if ((((((uint256(_f.v12018.which)) == uint256(0)) ? ((uint256(_f.v12021.which)) == uint256(0)) : false) ? ((uint256(_f.v10909.which)) == uint256(0)) : false) ? ((uint256((__reachm_4Ref(payable(msg.sender))).which)) == uint256(0)) : false)) {
          delete _reachm_0[payable(msg.sender)];
          _f.v12035 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12035;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12035 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        else {
          _f.v12041 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12041;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12041 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        }
      else {
        delete _reachm_2[payable(msg.sender)];
        delete _reachm_4[payable(msg.sender)];
        _f.v12053.which = _enum_T1.None;
        _f.v12053._None = false;
        _f.v12057.which = _enum_T3.None;
        _f.v12057._None = false;
        if ((((((uint256(_f.v10908.which)) == uint256(0)) ? ((uint256((__reachm_3Ref(payable(msg.sender))).which)) == uint256(0)) : false) ? ((uint256(_f.v12053.which)) == uint256(0)) : false) ? ((uint256(_f.v12057.which)) == uint256(0)) : false)) {
          delete _reachm_0[payable(msg.sender)];
          _f.v12063 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12063;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12063 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        else {
          _f.v12069 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12069;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12069 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        }
      }
    else {
      _f.v12075 = hex'4465616c65722057696e73000000000000000000';
      _f.v12076 = hex'456e640000000000000000000000000000000000';
      _f.v12077 = (_f.v11997 == uint256(1)) ? _f.v12075 : _f.v12076;
      emit _reach_oe_v12077( _f.v12077);
      _Memory._reachr_Player_surrender = _f.v12077;
      if ((_f.v10796.elem0)) {
        delete _reachm_1[payable(msg.sender)];
        delete _reachm_3[payable(msg.sender)];
        _f.v12086.which = _enum_T1.None;
        _f.v12086._None = false;
        _f.v12089.which = _enum_T3.None;
        _f.v12089._None = false;
        if ((((((uint256(_f.v12086.which)) == uint256(0)) ? ((uint256(_f.v12089.which)) == uint256(0)) : false) ? ((uint256(_f.v10909.which)) == uint256(0)) : false) ? ((uint256((__reachm_4Ref(payable(msg.sender))).which)) == uint256(0)) : false)) {
          delete _reachm_0[payable(msg.sender)];
          _f.v12103 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12103;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12103 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        else {
          _f.v12109 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12109;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12109 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        }
      else {
        delete _reachm_2[payable(msg.sender)];
        delete _reachm_4[payable(msg.sender)];
        _f.v12121.which = _enum_T1.None;
        _f.v12121._None = false;
        _f.v12125.which = _enum_T3.None;
        _f.v12125._None = false;
        if ((((((uint256(_f.v10908.which)) == uint256(0)) ? ((uint256((__reachm_3Ref(payable(msg.sender))).which)) == uint256(0)) : false) ? ((uint256(_f.v12121.which)) == uint256(0)) : false) ? ((uint256(_f.v12125.which)) == uint256(0)) : false)) {
          delete _reachm_0[payable(msg.sender)];
          _f.v12131 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12131;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12131 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        else {
          _f.v12137 = safeSub(_svs.v2376, _f.v11996);
          T14  memory _ja;
          _ja.elem0 = _svs.v2364;
          _ja.elem1 = _svs.v2366;
          _ja.elem2 = _f.v12137;
          _ja.elem3 = _svs.v2377;
          _ja.elem4 = _svs.v2378;
          _ja.elem5 = _svs.v2379;
          _ja.elem6 = (_f.v12137 >= (safeMul((safeDiv(_svs.v2366, uint256(100))), uint256(250))));
          _ja.elem7 = uint256(block.number);
          _reachl_2(_ja, _Memory);
          }
        }
      }
    }
    }
  function _reachl_2(T14 memory _a, Memory memory _Memory) internal  {
    if (_a.elem6) {
      T10 memory nsvs;
      nsvs.v2364 = _a.elem0;
      nsvs.v2366 = _a.elem1;
      nsvs.v2376 = _a.elem2;
      nsvs.v2377 = _a.elem3;
      nsvs.v2378 = _a.elem4;
      nsvs.v2379 = _a.elem5;
      current_step = uint256(4);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem0.transfer(_a.elem2);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Dealer_submitHand(uint256 v26231, uint256 v26232) external payable returns (bool) {
    Memory memory _Memory;
    T4  memory _ja;
    _ja.elem0 = v26231;
    _ja.elem1 = v26232;
    _reacha_Dealer_submitHand(_ja, _Memory);
    return _Memory._reachr_Dealer_submitHand;
    }
  function Player_buyInsurance(bool v26238) external payable returns (uint256) {
    Memory memory _Memory;
    _reacha_Player_buyInsurance(v26238, _Memory);
    return _Memory._reachr_Player_buyInsurance;
    }
  function Player_doubleDown(bool v26244) external payable returns (uint256) {
    Memory memory _Memory;
    _reacha_Player_doubleDown(v26244, _Memory);
    return _Memory._reachr_Player_doubleDown;
    }
  function Player_getOutcome(bool v26250) external payable returns (bytes20) {
    Memory memory _Memory;
    _reacha_Player_getOutcome(v26250, _Memory);
    return _Memory._reachr_Player_getOutcome;
    }
  function Player_placeBet(bool v26256) external payable returns (uint256) {
    Memory memory _Memory;
    _reacha_Player_placeBet(v26256, _Memory);
    return _Memory._reachr_Player_placeBet;
    }
  function Player_submitHand(bool v26264, uint256 v26265, uint256 v26266) external payable returns (uint256) {
    Memory memory _Memory;
    T6  memory _ja;
    _ja.elem0 = v26264;
    _ja.elem1 = v26265;
    _ja.elem2 = v26266;
    _reacha_Player_submitHand(_ja, _Memory);
    return _Memory._reachr_Player_submitHand;
    }
  function Player_surrender(bool v26274, uint256 v26275, uint256 v26276) external payable returns (bytes20) {
    Memory memory _Memory;
    T6  memory _ja;
    _ja.elem0 = v26274;
    _ja.elem1 = v26275;
    _ja.elem2 = v26276;
    _reacha_Player_surrender(_ja, _Memory);
    return _Memory._reachr_Player_surrender;
    }
  constructor(T11 memory v26279) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v26279, _Memory);
    }
  function _reachp_1(T13 calldata v26282) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v26282, _Memory);
    }
  function _reachp_3(T8 calldata v26285) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v26285, _Memory);
    }
  function bank() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_bank(_ja, _Memory);
    return _Memory._reachr_bank;
    }
  }
