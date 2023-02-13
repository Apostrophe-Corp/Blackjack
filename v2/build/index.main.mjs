// Automatically generated with Reach 0.1.13 (c44a1544)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (c44a1544)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const ctc6 = stdlib.T_Object({
    boughtInsurance: ctc2,
    cardCount: ctc1,
    cardValue: ctc1,
    doubledDown: ctc2,
    surrendered: ctc2
    });
  const ctc7 = stdlib.T_Data({
    None: ctc3,
    Some: ctc6
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  const map2_ctc = ctc5;
  
  const map3_ctc = ctc7;
  
  const map4_ctc = ctc7;
  
  
  const _bank = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2364, v2365, v2366] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2364, v2366, v2376, v2377, v2378, v2379] = svs;
      return (await ((async () => {
        
        
        return v2376;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      bank: {
        decode: _bank,
        dom: [],
        rng: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc3, ctc3, ctc6, ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function D(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for D expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for D expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc10 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc7,
    Player_buyInsurance0_113: ctc8,
    Player_doubleDown0_113: ctc8,
    Player_getOutcome0_113: ctc8,
    Player_placeBet0_113: ctc8,
    Player_submitHand0_113: ctc9,
    Player_surrender0_113: ctc9
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false
    });
  
  
  const v2360 = stdlib.protect(ctc2, interact.bankAmount, 'for D\'s interact field bankAmount');
  const v2361 = stdlib.protect(ctc2, interact.betAmount, 'for D\'s interact field betAmount');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2360, v2361],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2365, v2366], secs: v2368, time: v2367, didSend: v83, from: v2364 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v2365, v2366], secs: v2368, time: v2367, didSend: v83, from: v2364 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v2364, v2365, v2366],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2367,
    onlyIf: true,
    out_tys: [],
    pay: [v2365, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [], secs: v2371, time: v2370, didSend: v90, from: v2369 } = txn2;
      
      sim_r.txns.push({
        amt: v2365,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v2376 = v2365;
      const v2377 = stdlib.checkedBigNumberify('./index.rsh:172:17:decimal', stdlib.UInt_max, '0');
      const v2378 = stdlib.checkedBigNumberify('./index.rsh:171:17:decimal', stdlib.UInt_max, '0');
      const v2379 = false;
      const v2380 = true;
      const v2381 = v2370;
      
      if (await (async () => {
        
        return v2380;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v2364,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2371, time: v2370, didSend: v90, from: v2369 } = txn2;
  ;
  const v2374 = stdlib.addressEq(v2364, v2369);
  stdlib.assert(v2374, {
    at: './index.rsh:139:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc0, await interact.deployed(v2366), {
    at: './index.rsh:140:28:application',
    fs: ['at ./index.rsh:140:28:application call to [unknown function] (defined at: ./index.rsh:140:28:function exp)', 'at ./index.rsh:140:28:application call to "liftedInteract" (defined at: ./index.rsh:140:28:application)'],
    msg: 'deployed',
    who: 'D'
    });
  
  let v2376 = v2365;
  let v2377 = stdlib.checkedBigNumberify('./index.rsh:172:17:decimal', stdlib.UInt_max, '0');
  let v2378 = stdlib.checkedBigNumberify('./index.rsh:171:17:decimal', stdlib.UInt_max, '0');
  let v2379 = false;
  let v2380 = true;
  let v2381 = v2370;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v2380;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn4;
    switch (v2717[0]) {
      case 'Dealer_submitHand0_113': {
        const v2720 = v2717[1];
        undefined /* setApiDetails */;
        const v2725 = v2720[stdlib.checkedBigNumberify('./index.rsh:459:22:spread', stdlib.UInt_max, '0')];
        const v2726 = v2720[stdlib.checkedBigNumberify('./index.rsh:459:22:spread', stdlib.UInt_max, '1')];
        const v2727 = stdlib.gt(v2726, stdlib.checkedBigNumberify('./index.rsh:460:43:decimal', stdlib.UInt_max, '0'));
        const v2728 = stdlib.gt(v2725, stdlib.checkedBigNumberify('./index.rsh:460:60:decimal', stdlib.UInt_max, '0'));
        const v2729 = v2727 ? v2728 : false;
        stdlib.assert(v2729, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:460:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:459:65:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'Invalid submission',
          who: 'D'
          });
        ;
        const v2855 = null;
        await txn4.getOutput('Dealer_submitHand', 'v2855', ctc0, v2855);
        const cv2376 = v2376;
        const cv2377 = v2726;
        const cv2378 = v2725;
        const cv2379 = true;
        const cv2380 = true;
        const cv2381 = v2718;
        
        v2376 = cv2376;
        v2377 = cv2377;
        v2378 = cv2378;
        v2379 = cv2379;
        v2380 = cv2380;
        v2381 = cv2381;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Player_buyInsurance0_113': {
        const v4066 = v2717[1];
        undefined /* setApiDetails */;
        const v4078 = v4066[stdlib.checkedBigNumberify('./index.rsh:256:22:spread', stdlib.UInt_max, '0')];
        const v4079 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2716, ctc2), null);
        const v4080 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc11, v2716, ctc2), null);
        const v4081 = v4078 ? v4079 : v4080;
        const v4085 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc11, v2716, ctc5), null);
        const v4086 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc11, v2716, ctc5), null);
        const v4087 = v4078 ? v4085 : v4086;
        let v4088;
        switch (v4087[0]) {
          case 'None': {
            const v4089 = v4087[1];
            const v4090 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            v4088 = v4090;
            
            break;
            }
          case 'Some': {
            const v4092 = v4087[1];
            v4088 = v4092;
            
            break;
            }
          }
        const v4093 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2716, ctc0), null);
        const v4094 = {
          None: 0,
          Some: 1
          }[v4093[0]];
        const v4095 = stdlib.eq(v4094, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4095, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You did not place a bet on this game',
          who: 'D'
          });
        const v4097 = v4088.boughtInsurance;
        const v4098 = v4097 ? false : true;
        stdlib.assert(v4098, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You cannot buy insurance twice',
          who: 'D'
          });
        ;
        let v4215;
        switch (v4081[0]) {
          case 'None': {
            const v4216 = v4081[1];
            v4215 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v4217 = v4081[1];
            v4215 = v4217;
            
            break;
            }
          }
        let v4221;
        switch (v4087[0]) {
          case 'None': {
            const v4222 = v4087[1];
            const v4223 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            v4221 = v4223;
            
            break;
            }
          case 'Some': {
            const v4225 = v4087[1];
            v4221 = v4225;
            
            break;
            }
          }
        const v4230 = v4221.boughtInsurance;
        const v4231 = v4230 ? false : true;
        stdlib.assert(v4231, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:267:39:application call to [unknown function] (defined at: ./index.rsh:267:39:function exp)'],
          msg: 'You cannot buy insurance twice',
          who: 'D'
          });
        if (v4078) {
          const v4234 = stdlib.safeAdd(v2366, v4215);
          await stdlib.mapSet(map1, ctc11, v2716, ctc2, v4234);
          const v4236 = v4221.cardCount;
          const v4237 = v4221.cardValue;
          const v4238 = v4221.doubledDown;
          const v4239 = v4221.surrendered;
          const v4240 = {
            boughtInsurance: true,
            cardCount: v4236,
            cardValue: v4237,
            doubledDown: v4238,
            surrendered: v4239
            };
          await stdlib.mapSet(map3, ctc11, v2716, ctc5, v4240);
          await txn4.getOutput('Player_buyInsurance', 'v4234', ctc2, v4234);
          const v4248 = stdlib.safeAdd(v2376, v2366);
          const cv2376 = v4248;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        else {
          const v4250 = stdlib.safeAdd(v2366, v4215);
          await stdlib.mapSet(map2, ctc11, v2716, ctc2, v4250);
          const v4252 = v4221.cardCount;
          const v4253 = v4221.cardValue;
          const v4254 = v4221.doubledDown;
          const v4255 = v4221.surrendered;
          const v4256 = {
            boughtInsurance: true,
            cardCount: v4252,
            cardValue: v4253,
            doubledDown: v4254,
            surrendered: v4255
            };
          await stdlib.mapSet(map4, ctc11, v2716, ctc5, v4256);
          await txn4.getOutput('Player_buyInsurance', 'v4250', ctc2, v4250);
          const v4264 = stdlib.safeAdd(v2376, v2366);
          const cv2376 = v4264;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Player_doubleDown0_113': {
        const v5412 = v2717[1];
        undefined /* setApiDetails */;
        const v5447 = v5412[stdlib.checkedBigNumberify('./index.rsh:220:22:spread', stdlib.UInt_max, '0')];
        const v5448 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2716, ctc2), null);
        const v5449 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc11, v2716, ctc2), null);
        const v5450 = v5447 ? v5448 : v5449;
        const v5454 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc11, v2716, ctc5), null);
        const v5455 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc11, v2716, ctc5), null);
        const v5456 = v5447 ? v5454 : v5455;
        let v5457;
        switch (v5456[0]) {
          case 'None': {
            const v5458 = v5456[1];
            const v5459 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            v5457 = v5459;
            
            break;
            }
          case 'Some': {
            const v5461 = v5456[1];
            v5457 = v5461;
            
            break;
            }
          }
        const v5462 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2716, ctc0), null);
        const v5463 = {
          None: 0,
          Some: 1
          }[v5462[0]];
        const v5464 = stdlib.eq(v5463, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5464, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:227:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You did not place a bet on this game',
          who: 'D'
          });
        const v5466 = v5457.doubledDown;
        const v5467 = v5466 ? false : true;
        stdlib.assert(v5467, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You cannot double down twice',
          who: 'D'
          });
        ;
        let v5617;
        switch (v5450[0]) {
          case 'None': {
            const v5618 = v5450[1];
            v5617 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5619 = v5450[1];
            v5617 = v5619;
            
            break;
            }
          }
        let v5623;
        switch (v5456[0]) {
          case 'None': {
            const v5624 = v5456[1];
            const v5625 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            v5623 = v5625;
            
            break;
            }
          case 'Some': {
            const v5627 = v5456[1];
            v5623 = v5627;
            
            break;
            }
          }
        const v5632 = v5623.doubledDown;
        const v5633 = v5632 ? false : true;
        stdlib.assert(v5633, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:39:application call to [unknown function] (defined at: ./index.rsh:231:39:function exp)'],
          msg: 'You cannot double down twice',
          who: 'D'
          });
        if (v5447) {
          const v5636 = stdlib.safeAdd(v2366, v5617);
          await stdlib.mapSet(map1, ctc11, v2716, ctc2, v5636);
          const v5637 = v5623.boughtInsurance;
          const v5638 = v5623.cardCount;
          const v5639 = v5623.cardValue;
          const v5641 = v5623.surrendered;
          const v5642 = {
            boughtInsurance: v5637,
            cardCount: v5638,
            cardValue: v5639,
            doubledDown: true,
            surrendered: v5641
            };
          await stdlib.mapSet(map3, ctc11, v2716, ctc5, v5642);
          await txn4.getOutput('Player_doubleDown', 'v5636', ctc2, v5636);
          const v5650 = stdlib.safeAdd(v2376, v2366);
          const cv2376 = v5650;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        else {
          const v5652 = stdlib.safeAdd(v2366, v5617);
          await stdlib.mapSet(map2, ctc11, v2716, ctc2, v5652);
          const v5653 = v5623.boughtInsurance;
          const v5654 = v5623.cardCount;
          const v5655 = v5623.cardValue;
          const v5657 = v5623.surrendered;
          const v5658 = {
            boughtInsurance: v5653,
            cardCount: v5654,
            cardValue: v5655,
            doubledDown: true,
            surrendered: v5657
            };
          await stdlib.mapSet(map4, ctc11, v2716, ctc5, v5658);
          await txn4.getOutput('Player_doubleDown', 'v5652', ctc2, v5652);
          const v5666 = stdlib.safeAdd(v2376, v2366);
          const cv2376 = v5666;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Player_getOutcome0_113': {
        const v6758 = v2717[1];
        undefined /* setApiDetails */;
        const v6816 = v6758[stdlib.checkedBigNumberify('./index.rsh:358:22:spread', stdlib.UInt_max, '0')];
        const v6817 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2716, ctc2), null);
        const v6818 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc11, v2716, ctc2), null);
        const v6819 = v6816 ? v6817 : v6818;
        const v6823 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc11, v2716, ctc5), null);
        const v6824 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc11, v2716, ctc5), null);
        const v6825 = v6816 ? v6823 : v6824;
        let v6826;
        switch (v6825[0]) {
          case 'None': {
            const v6827 = v6825[1];
            const v6828 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            v6826 = v6828;
            
            break;
            }
          case 'Some': {
            const v6830 = v6825[1];
            v6826 = v6830;
            
            break;
            }
          }
        const v6831 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2716, ctc0), null);
        const v6832 = {
          None: 0,
          Some: 1
          }[v6831[0]];
        const v6833 = stdlib.eq(v6832, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6833, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:365:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You did not place a bet on this game',
          who: 'D'
          });
        stdlib.assert(v2379, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:366:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'The Dealer is yet to submit his hand',
          who: 'D'
          });
        const v6836 = v6826.cardCount;
        const v6837 = stdlib.gt(v6836, stdlib.checkedBigNumberify('./index.rsh:368:56:decimal', stdlib.UInt_max, '0'));
        const v6838 = v6826.cardValue;
        const v6839 = stdlib.gt(v6838, stdlib.checkedBigNumberify('./index.rsh:368:84:decimal', stdlib.UInt_max, '0'));
        const v6840 = v6837 ? v6839 : false;
        stdlib.assert(v6840, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'Invalid submission',
          who: 'D'
          });
        ;
        let v7019;
        switch (v6819[0]) {
          case 'None': {
            const v7020 = v6819[1];
            v7019 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v7021 = v6819[1];
            v7019 = v7021;
            
            break;
            }
          }
        let v7025;
        switch (v6825[0]) {
          case 'None': {
            const v7026 = v6825[1];
            const v7027 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            v7025 = v7027;
            
            break;
            }
          case 'Some': {
            const v7029 = v6825[1];
            v7025 = v7029;
            
            break;
            }
          }
        const v7035 = v7025.cardCount;
        const v7036 = stdlib.gt(v7035, stdlib.checkedBigNumberify('./index.rsh:368:56:decimal', stdlib.UInt_max, '0'));
        const v7037 = v7025.cardValue;
        const v7038 = stdlib.gt(v7037, stdlib.checkedBigNumberify('./index.rsh:368:84:decimal', stdlib.UInt_max, '0'));
        const v7039 = v7036 ? v7038 : false;
        stdlib.assert(v7039, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
          msg: 'Invalid submission',
          who: 'D'
          });
        const v7044 = v7025.boughtInsurance;
        const v7045 = v7025.surrendered;
        const v7047 = stdlib.eq(v2378, stdlib.checkedBigNumberify('./index.rsh:34:27:decimal', stdlib.UInt_max, '21'));
        const v7048 = stdlib.eq(v2377, stdlib.checkedBigNumberify('./index.rsh:35:55:decimal', stdlib.UInt_max, '2'));
        const v7049 = v7044 ? v7048 : false;
        const v7051 = v7045 ? v7048 : false;
        const v7052 = stdlib.eq(v7037, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
        const v12161 = v7052 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v12162 = v7051 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '5') : v12161;
        const v12163 = v7049 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3') : v12162;
        const v7053 = stdlib.gt(v2378, stdlib.checkedBigNumberify('./index.rsh:46:33:decimal', stdlib.UInt_max, '21'));
        const v7054 = stdlib.lt(v7037, stdlib.checkedBigNumberify('./index.rsh:47:33:decimal', stdlib.UInt_max, '22'));
        const v7056 = stdlib.eq(v7035, stdlib.checkedBigNumberify('./index.rsh:48:61:decimal', stdlib.UInt_max, '2'));
        const v7057 = v7052 ? v7056 : false;
        const v12164 = v7057 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v12165 = v7054 ? v12164 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v7058 = stdlib.lt(v2378, stdlib.checkedBigNumberify('./index.rsh:56:33:decimal', stdlib.UInt_max, '21'));
        const v7059 = stdlib.gt(v2378, v7037);
        const v7060 = stdlib.gt(v7037, v2378);
        const v12166 = v7054 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v12167 = v7057 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4') : v12166;
        const v7065 = stdlib.eq(v7037, v2378);
        const v12168 = v7065 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v12169 = v7060 ? v12167 : v12168;
        const v12170 = v7059 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v12169;
        const v12171 = v7058 ? v12170 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v12172 = v7053 ? v12165 : v12171;
        const v12173 = v7045 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v12172;
        const v7046 = v7047 ? v12163 : v12173;
        const v7066 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v7066) {
          const v7068 = v7044 ? v2366 : stdlib.checkedBigNumberify('./index.rsh:386:111:decimal', stdlib.UInt_max, '0');
          const v7069 = stdlib.safeSub(v7019, v7068);
          const v7070 = stdlib.safeMul(v7069, stdlib.checkedBigNumberify('./index.rsh:387:69:decimal', stdlib.UInt_max, '2'));
          const v7071 = stdlib.ge(v2376, v7070);
          if (v7071) {
            ;
            const v7077 = 'Player Wins         ';
            await txn4.getOutput('Player_getOutcome', 'v7077', ctc12, v7077);
            const v7085 = stdlib.safeSub(v2376, v7070);
            if (v6816) {
              await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
              await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
              const v7086 = ['None', null];
              const v7087 = {
                None: 0,
                Some: 1
                }[v7086[0]];
              const v7088 = stdlib.eq(v7087, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7089 = ['None', null];
              const v7090 = {
                None: 0,
                Some: 1
                }[v7089[0]];
              const v7091 = stdlib.eq(v7090, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7092 = v7088 ? v7091 : false;
              const v7094 = {
                None: 0,
                Some: 1
                }[v6818[0]];
              const v7095 = stdlib.eq(v7094, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7096 = v7092 ? v7095 : false;
              const v7098 = {
                None: 0,
                Some: 1
                }[v6824[0]];
              const v7099 = stdlib.eq(v7098, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7100 = v7096 ? v7099 : false;
              if (v7100) {
                await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                const v7103 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7104 = stdlib.safeMul(v7103, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7105 = stdlib.ge(v7085, v7104);
                const cv2376 = v7085;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7105;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}
              else {
                const v7114 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7115 = stdlib.safeMul(v7114, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7116 = stdlib.ge(v7085, v7115);
                const cv2376 = v7085;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7116;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}}
            else {
              await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
              await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
              const v7125 = {
                None: 0,
                Some: 1
                }[v6817[0]];
              const v7126 = stdlib.eq(v7125, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7128 = {
                None: 0,
                Some: 1
                }[v6823[0]];
              const v7129 = stdlib.eq(v7128, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7130 = v7126 ? v7129 : false;
              const v7131 = ['None', null];
              const v7132 = {
                None: 0,
                Some: 1
                }[v7131[0]];
              const v7133 = stdlib.eq(v7132, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7134 = v7130 ? v7133 : false;
              const v7135 = ['None', null];
              const v7136 = {
                None: 0,
                Some: 1
                }[v7135[0]];
              const v7137 = stdlib.eq(v7136, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7138 = v7134 ? v7137 : false;
              if (v7138) {
                await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                const v7141 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7142 = stdlib.safeMul(v7141, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7143 = stdlib.ge(v7085, v7142);
                const cv2376 = v7085;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7143;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}
              else {
                const v7152 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7153 = stdlib.safeMul(v7152, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7154 = stdlib.ge(v7085, v7153);
                const cv2376 = v7085;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7154;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}}}
          else {
            const v7162 = 'Player Wins         ';
            await txn4.getOutput('Player_getOutcome', 'v7162', ctc12, v7162);
            const v7170 = stdlib.safeSub(v2376, v7070);
            if (v6816) {
              await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
              await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
              const v7171 = ['None', null];
              const v7172 = {
                None: 0,
                Some: 1
                }[v7171[0]];
              const v7173 = stdlib.eq(v7172, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7174 = ['None', null];
              const v7175 = {
                None: 0,
                Some: 1
                }[v7174[0]];
              const v7176 = stdlib.eq(v7175, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7177 = v7173 ? v7176 : false;
              const v7179 = {
                None: 0,
                Some: 1
                }[v6818[0]];
              const v7180 = stdlib.eq(v7179, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7181 = v7177 ? v7180 : false;
              const v7183 = {
                None: 0,
                Some: 1
                }[v6824[0]];
              const v7184 = stdlib.eq(v7183, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7185 = v7181 ? v7184 : false;
              if (v7185) {
                await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                const v7188 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7189 = stdlib.safeMul(v7188, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7190 = stdlib.ge(v7170, v7189);
                const cv2376 = v7170;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7190;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}
              else {
                const v7199 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7200 = stdlib.safeMul(v7199, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7201 = stdlib.ge(v7170, v7200);
                const cv2376 = v7170;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7201;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}}
            else {
              await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
              await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
              const v7210 = {
                None: 0,
                Some: 1
                }[v6817[0]];
              const v7211 = stdlib.eq(v7210, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7213 = {
                None: 0,
                Some: 1
                }[v6823[0]];
              const v7214 = stdlib.eq(v7213, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7215 = v7211 ? v7214 : false;
              const v7216 = ['None', null];
              const v7217 = {
                None: 0,
                Some: 1
                }[v7216[0]];
              const v7218 = stdlib.eq(v7217, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7219 = v7215 ? v7218 : false;
              const v7220 = ['None', null];
              const v7221 = {
                None: 0,
                Some: 1
                }[v7220[0]];
              const v7222 = stdlib.eq(v7221, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7223 = v7219 ? v7222 : false;
              if (v7223) {
                await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                const v7226 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7227 = stdlib.safeMul(v7226, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7228 = stdlib.ge(v7170, v7227);
                const cv2376 = v7170;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7228;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}
              else {
                const v7237 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7238 = stdlib.safeMul(v7237, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7239 = stdlib.ge(v7170, v7238);
                const cv2376 = v7170;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7239;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}}}}
        else {
          const v7247 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          if (v7247) {
            const v7248 = 'Dealer Wins         ';
            await txn4.getOutput('Player_getOutcome', 'v7248', ctc12, v7248);
            if (v6816) {
              await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
              await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
              const v7255 = ['None', null];
              const v7256 = {
                None: 0,
                Some: 1
                }[v7255[0]];
              const v7257 = stdlib.eq(v7256, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7258 = ['None', null];
              const v7259 = {
                None: 0,
                Some: 1
                }[v7258[0]];
              const v7260 = stdlib.eq(v7259, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7261 = v7257 ? v7260 : false;
              const v7263 = {
                None: 0,
                Some: 1
                }[v6818[0]];
              const v7264 = stdlib.eq(v7263, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7265 = v7261 ? v7264 : false;
              const v7267 = {
                None: 0,
                Some: 1
                }[v6824[0]];
              const v7268 = stdlib.eq(v7267, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7269 = v7265 ? v7268 : false;
              if (v7269) {
                await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                const v7272 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7273 = stdlib.safeMul(v7272, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7274 = stdlib.ge(v2376, v7273);
                const cv2376 = v2376;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7274;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}
              else {
                const v7283 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7284 = stdlib.safeMul(v7283, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7285 = stdlib.ge(v2376, v7284);
                const cv2376 = v2376;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7285;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}}
            else {
              await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
              await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
              const v7294 = {
                None: 0,
                Some: 1
                }[v6817[0]];
              const v7295 = stdlib.eq(v7294, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7297 = {
                None: 0,
                Some: 1
                }[v6823[0]];
              const v7298 = stdlib.eq(v7297, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7299 = v7295 ? v7298 : false;
              const v7300 = ['None', null];
              const v7301 = {
                None: 0,
                Some: 1
                }[v7300[0]];
              const v7302 = stdlib.eq(v7301, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7303 = v7299 ? v7302 : false;
              const v7304 = ['None', null];
              const v7305 = {
                None: 0,
                Some: 1
                }[v7304[0]];
              const v7306 = stdlib.eq(v7305, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v7307 = v7303 ? v7306 : false;
              if (v7307) {
                await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                const v7310 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7311 = stdlib.safeMul(v7310, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7312 = stdlib.ge(v2376, v7311);
                const cv2376 = v2376;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7312;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}
              else {
                const v7321 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v7322 = stdlib.safeMul(v7321, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v7323 = stdlib.ge(v2376, v7322);
                const cv2376 = v2376;
                const cv2377 = v2377;
                const cv2378 = v2378;
                const cv2379 = true;
                const cv2380 = v7323;
                const cv2381 = v2718;
                
                v2376 = cv2376;
                v2377 = cv2377;
                v2378 = cv2378;
                v2379 = cv2379;
                v2380 = cv2380;
                v2381 = cv2381;
                
                txn3 = txn4;
                continue;}}}
          else {
            const v7331 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            if (v7331) {
              const v7333 = v7044 ? v2366 : stdlib.checkedBigNumberify('./index.rsh:415:111:decimal', stdlib.UInt_max, '0');
              const v7334 = stdlib.safeSub(v7019, v7333);
              const v7335 = stdlib.ge(v2376, v7334);
              if (v7335) {
                ;
                const v7340 = 'Push                ';
                await txn4.getOutput('Player_getOutcome', 'v7340', ctc12, v7340);
                const v7347 = stdlib.safeSub(v2376, v7334);
                if (v6816) {
                  await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
                  const v7348 = ['None', null];
                  const v7349 = {
                    None: 0,
                    Some: 1
                    }[v7348[0]];
                  const v7350 = stdlib.eq(v7349, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7351 = ['None', null];
                  const v7352 = {
                    None: 0,
                    Some: 1
                    }[v7351[0]];
                  const v7353 = stdlib.eq(v7352, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7354 = v7350 ? v7353 : false;
                  const v7356 = {
                    None: 0,
                    Some: 1
                    }[v6818[0]];
                  const v7357 = stdlib.eq(v7356, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7358 = v7354 ? v7357 : false;
                  const v7360 = {
                    None: 0,
                    Some: 1
                    }[v6824[0]];
                  const v7361 = stdlib.eq(v7360, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7362 = v7358 ? v7361 : false;
                  if (v7362) {
                    await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                    const v7365 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7366 = stdlib.safeMul(v7365, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7367 = stdlib.ge(v7347, v7366);
                    const cv2376 = v7347;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7367;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}
                  else {
                    const v7376 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7377 = stdlib.safeMul(v7376, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7378 = stdlib.ge(v7347, v7377);
                    const cv2376 = v7347;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7378;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}}
                else {
                  await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
                  const v7387 = {
                    None: 0,
                    Some: 1
                    }[v6817[0]];
                  const v7388 = stdlib.eq(v7387, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7390 = {
                    None: 0,
                    Some: 1
                    }[v6823[0]];
                  const v7391 = stdlib.eq(v7390, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7392 = v7388 ? v7391 : false;
                  const v7393 = ['None', null];
                  const v7394 = {
                    None: 0,
                    Some: 1
                    }[v7393[0]];
                  const v7395 = stdlib.eq(v7394, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7396 = v7392 ? v7395 : false;
                  const v7397 = ['None', null];
                  const v7398 = {
                    None: 0,
                    Some: 1
                    }[v7397[0]];
                  const v7399 = stdlib.eq(v7398, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7400 = v7396 ? v7399 : false;
                  if (v7400) {
                    await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                    const v7403 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7404 = stdlib.safeMul(v7403, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7405 = stdlib.ge(v7347, v7404);
                    const cv2376 = v7347;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7405;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}
                  else {
                    const v7414 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7415 = stdlib.safeMul(v7414, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7416 = stdlib.ge(v7347, v7415);
                    const cv2376 = v7347;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7416;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}}}
              else {
                const v7424 = 'Push                ';
                await txn4.getOutput('Player_getOutcome', 'v7424', ctc12, v7424);
                const v7431 = stdlib.safeSub(v2376, v7334);
                if (v6816) {
                  await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
                  const v7432 = ['None', null];
                  const v7433 = {
                    None: 0,
                    Some: 1
                    }[v7432[0]];
                  const v7434 = stdlib.eq(v7433, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7435 = ['None', null];
                  const v7436 = {
                    None: 0,
                    Some: 1
                    }[v7435[0]];
                  const v7437 = stdlib.eq(v7436, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7438 = v7434 ? v7437 : false;
                  const v7440 = {
                    None: 0,
                    Some: 1
                    }[v6818[0]];
                  const v7441 = stdlib.eq(v7440, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7442 = v7438 ? v7441 : false;
                  const v7444 = {
                    None: 0,
                    Some: 1
                    }[v6824[0]];
                  const v7445 = stdlib.eq(v7444, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7446 = v7442 ? v7445 : false;
                  if (v7446) {
                    await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                    const v7449 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7450 = stdlib.safeMul(v7449, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7451 = stdlib.ge(v7431, v7450);
                    const cv2376 = v7431;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7451;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}
                  else {
                    const v7460 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7461 = stdlib.safeMul(v7460, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7462 = stdlib.ge(v7431, v7461);
                    const cv2376 = v7431;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7462;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}}
                else {
                  await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
                  const v7471 = {
                    None: 0,
                    Some: 1
                    }[v6817[0]];
                  const v7472 = stdlib.eq(v7471, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7474 = {
                    None: 0,
                    Some: 1
                    }[v6823[0]];
                  const v7475 = stdlib.eq(v7474, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7476 = v7472 ? v7475 : false;
                  const v7477 = ['None', null];
                  const v7478 = {
                    None: 0,
                    Some: 1
                    }[v7477[0]];
                  const v7479 = stdlib.eq(v7478, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7480 = v7476 ? v7479 : false;
                  const v7481 = ['None', null];
                  const v7482 = {
                    None: 0,
                    Some: 1
                    }[v7481[0]];
                  const v7483 = stdlib.eq(v7482, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7484 = v7480 ? v7483 : false;
                  if (v7484) {
                    await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                    const v7487 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7488 = stdlib.safeMul(v7487, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7489 = stdlib.ge(v7431, v7488);
                    const cv2376 = v7431;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7489;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}
                  else {
                    const v7498 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7499 = stdlib.safeMul(v7498, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7500 = stdlib.ge(v7431, v7499);
                    const cv2376 = v7431;
                    const cv2377 = v2377;
                    const cv2378 = v2378;
                    const cv2379 = true;
                    const cv2380 = v7500;
                    const cv2381 = v2718;
                    
                    v2376 = cv2376;
                    v2377 = cv2377;
                    v2378 = cv2378;
                    v2379 = cv2379;
                    v2380 = cv2380;
                    v2381 = cv2381;
                    
                    txn3 = txn4;
                    continue;}}}}
            else {
              const v7508 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4'));
              if (v7508) {
                const v7509 = stdlib.safeDiv(v7019, stdlib.checkedBigNumberify('./index.rsh:428:80:decimal', stdlib.UInt_max, '100'));
                const v7510 = stdlib.safeMul(v7509, stdlib.checkedBigNumberify('./index.rsh:428:87:decimal', stdlib.UInt_max, '250'));
                const v7511 = stdlib.ge(v2376, v7510);
                if (v7511) {
                  ;
                  const v7516 = 'Blackjack           ';
                  await txn4.getOutput('Player_getOutcome', 'v7516', ctc12, v7516);
                  const v7523 = stdlib.safeSub(v2376, v7510);
                  if (v6816) {
                    await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7524 = ['None', null];
                    const v7525 = {
                      None: 0,
                      Some: 1
                      }[v7524[0]];
                    const v7526 = stdlib.eq(v7525, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7527 = ['None', null];
                    const v7528 = {
                      None: 0,
                      Some: 1
                      }[v7527[0]];
                    const v7529 = stdlib.eq(v7528, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7530 = v7526 ? v7529 : false;
                    const v7532 = {
                      None: 0,
                      Some: 1
                      }[v6818[0]];
                    const v7533 = stdlib.eq(v7532, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7534 = v7530 ? v7533 : false;
                    const v7536 = {
                      None: 0,
                      Some: 1
                      }[v6824[0]];
                    const v7537 = stdlib.eq(v7536, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7538 = v7534 ? v7537 : false;
                    if (v7538) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7541 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7542 = stdlib.safeMul(v7541, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7543 = stdlib.ge(v7523, v7542);
                      const cv2376 = v7523;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7543;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7552 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7553 = stdlib.safeMul(v7552, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7554 = stdlib.ge(v7523, v7553);
                      const cv2376 = v7523;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7554;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}
                  else {
                    await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7563 = {
                      None: 0,
                      Some: 1
                      }[v6817[0]];
                    const v7564 = stdlib.eq(v7563, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7566 = {
                      None: 0,
                      Some: 1
                      }[v6823[0]];
                    const v7567 = stdlib.eq(v7566, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7568 = v7564 ? v7567 : false;
                    const v7569 = ['None', null];
                    const v7570 = {
                      None: 0,
                      Some: 1
                      }[v7569[0]];
                    const v7571 = stdlib.eq(v7570, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7572 = v7568 ? v7571 : false;
                    const v7573 = ['None', null];
                    const v7574 = {
                      None: 0,
                      Some: 1
                      }[v7573[0]];
                    const v7575 = stdlib.eq(v7574, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7576 = v7572 ? v7575 : false;
                    if (v7576) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7579 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7580 = stdlib.safeMul(v7579, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7581 = stdlib.ge(v7523, v7580);
                      const cv2376 = v7523;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7581;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7590 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7591 = stdlib.safeMul(v7590, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7592 = stdlib.ge(v7523, v7591);
                      const cv2376 = v7523;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7592;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}}
                else {
                  const v7600 = 'Blackjack           ';
                  await txn4.getOutput('Player_getOutcome', 'v7600', ctc12, v7600);
                  const v7607 = stdlib.safeSub(v2376, v7510);
                  if (v6816) {
                    await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7608 = ['None', null];
                    const v7609 = {
                      None: 0,
                      Some: 1
                      }[v7608[0]];
                    const v7610 = stdlib.eq(v7609, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7611 = ['None', null];
                    const v7612 = {
                      None: 0,
                      Some: 1
                      }[v7611[0]];
                    const v7613 = stdlib.eq(v7612, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7614 = v7610 ? v7613 : false;
                    const v7616 = {
                      None: 0,
                      Some: 1
                      }[v6818[0]];
                    const v7617 = stdlib.eq(v7616, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7618 = v7614 ? v7617 : false;
                    const v7620 = {
                      None: 0,
                      Some: 1
                      }[v6824[0]];
                    const v7621 = stdlib.eq(v7620, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7622 = v7618 ? v7621 : false;
                    if (v7622) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7625 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7626 = stdlib.safeMul(v7625, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7627 = stdlib.ge(v7607, v7626);
                      const cv2376 = v7607;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7627;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7636 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7637 = stdlib.safeMul(v7636, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7638 = stdlib.ge(v7607, v7637);
                      const cv2376 = v7607;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7638;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}
                  else {
                    await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7647 = {
                      None: 0,
                      Some: 1
                      }[v6817[0]];
                    const v7648 = stdlib.eq(v7647, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7650 = {
                      None: 0,
                      Some: 1
                      }[v6823[0]];
                    const v7651 = stdlib.eq(v7650, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7652 = v7648 ? v7651 : false;
                    const v7653 = ['None', null];
                    const v7654 = {
                      None: 0,
                      Some: 1
                      }[v7653[0]];
                    const v7655 = stdlib.eq(v7654, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7656 = v7652 ? v7655 : false;
                    const v7657 = ['None', null];
                    const v7658 = {
                      None: 0,
                      Some: 1
                      }[v7657[0]];
                    const v7659 = stdlib.eq(v7658, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7660 = v7656 ? v7659 : false;
                    if (v7660) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7663 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7664 = stdlib.safeMul(v7663, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7665 = stdlib.ge(v7607, v7664);
                      const cv2376 = v7607;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7665;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7674 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7675 = stdlib.safeMul(v7674, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7676 = stdlib.ge(v7607, v7675);
                      const cv2376 = v7607;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7676;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}}}
              else {
                const v7684 = stdlib.ge(v2376, v7019);
                if (v7684) {
                  ;
                  const v7689 = 'Retrieve            ';
                  await txn4.getOutput('Player_getOutcome', 'v7689', ctc12, v7689);
                  const v7696 = stdlib.safeSub(v2376, v7019);
                  if (v6816) {
                    await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7697 = ['None', null];
                    const v7698 = {
                      None: 0,
                      Some: 1
                      }[v7697[0]];
                    const v7699 = stdlib.eq(v7698, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7700 = ['None', null];
                    const v7701 = {
                      None: 0,
                      Some: 1
                      }[v7700[0]];
                    const v7702 = stdlib.eq(v7701, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7703 = v7699 ? v7702 : false;
                    const v7705 = {
                      None: 0,
                      Some: 1
                      }[v6818[0]];
                    const v7706 = stdlib.eq(v7705, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7707 = v7703 ? v7706 : false;
                    const v7709 = {
                      None: 0,
                      Some: 1
                      }[v6824[0]];
                    const v7710 = stdlib.eq(v7709, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7711 = v7707 ? v7710 : false;
                    if (v7711) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7714 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7715 = stdlib.safeMul(v7714, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7716 = stdlib.ge(v7696, v7715);
                      const cv2376 = v7696;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7716;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7725 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7726 = stdlib.safeMul(v7725, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7727 = stdlib.ge(v7696, v7726);
                      const cv2376 = v7696;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7727;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}
                  else {
                    await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7736 = {
                      None: 0,
                      Some: 1
                      }[v6817[0]];
                    const v7737 = stdlib.eq(v7736, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7739 = {
                      None: 0,
                      Some: 1
                      }[v6823[0]];
                    const v7740 = stdlib.eq(v7739, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7741 = v7737 ? v7740 : false;
                    const v7742 = ['None', null];
                    const v7743 = {
                      None: 0,
                      Some: 1
                      }[v7742[0]];
                    const v7744 = stdlib.eq(v7743, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7745 = v7741 ? v7744 : false;
                    const v7746 = ['None', null];
                    const v7747 = {
                      None: 0,
                      Some: 1
                      }[v7746[0]];
                    const v7748 = stdlib.eq(v7747, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7749 = v7745 ? v7748 : false;
                    if (v7749) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7752 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7753 = stdlib.safeMul(v7752, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7754 = stdlib.ge(v7696, v7753);
                      const cv2376 = v7696;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7754;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7763 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7764 = stdlib.safeMul(v7763, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7765 = stdlib.ge(v7696, v7764);
                      const cv2376 = v7696;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7765;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}}
                else {
                  const v7773 = 'Retrieve            ';
                  await txn4.getOutput('Player_getOutcome', 'v7773', ctc12, v7773);
                  const v7780 = stdlib.safeSub(v2376, v7019);
                  if (v6816) {
                    await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7781 = ['None', null];
                    const v7782 = {
                      None: 0,
                      Some: 1
                      }[v7781[0]];
                    const v7783 = stdlib.eq(v7782, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7784 = ['None', null];
                    const v7785 = {
                      None: 0,
                      Some: 1
                      }[v7784[0]];
                    const v7786 = stdlib.eq(v7785, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7787 = v7783 ? v7786 : false;
                    const v7789 = {
                      None: 0,
                      Some: 1
                      }[v6818[0]];
                    const v7790 = stdlib.eq(v7789, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7791 = v7787 ? v7790 : false;
                    const v7793 = {
                      None: 0,
                      Some: 1
                      }[v6824[0]];
                    const v7794 = stdlib.eq(v7793, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7795 = v7791 ? v7794 : false;
                    if (v7795) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7798 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7799 = stdlib.safeMul(v7798, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7800 = stdlib.ge(v7780, v7799);
                      const cv2376 = v7780;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7800;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7809 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7810 = stdlib.safeMul(v7809, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7811 = stdlib.ge(v7780, v7810);
                      const cv2376 = v7780;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7811;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}
                  else {
                    await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
                    const v7820 = {
                      None: 0,
                      Some: 1
                      }[v6817[0]];
                    const v7821 = stdlib.eq(v7820, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7823 = {
                      None: 0,
                      Some: 1
                      }[v6823[0]];
                    const v7824 = stdlib.eq(v7823, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7825 = v7821 ? v7824 : false;
                    const v7826 = ['None', null];
                    const v7827 = {
                      None: 0,
                      Some: 1
                      }[v7826[0]];
                    const v7828 = stdlib.eq(v7827, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7829 = v7825 ? v7828 : false;
                    const v7830 = ['None', null];
                    const v7831 = {
                      None: 0,
                      Some: 1
                      }[v7830[0]];
                    const v7832 = stdlib.eq(v7831, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7833 = v7829 ? v7832 : false;
                    if (v7833) {
                      await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
                      const v7836 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7837 = stdlib.safeMul(v7836, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7838 = stdlib.ge(v7780, v7837);
                      const cv2376 = v7780;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7838;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}
                    else {
                      const v7847 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7848 = stdlib.safeMul(v7847, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7849 = stdlib.ge(v7780, v7848);
                      const cv2376 = v7780;
                      const cv2377 = v2377;
                      const cv2378 = v2378;
                      const cv2379 = true;
                      const cv2380 = v7849;
                      const cv2381 = v2718;
                      
                      v2376 = cv2376;
                      v2377 = cv2377;
                      v2378 = cv2378;
                      v2379 = cv2379;
                      v2380 = cv2380;
                      v2381 = cv2381;
                      
                      txn3 = txn4;
                      continue;}}}}}}}
        break;
        }
      case 'Player_placeBet0_113': {
        const v8104 = v2717[1];
        undefined /* setApiDetails */;
        ;
        const v9204 = v8104[stdlib.checkedBigNumberify('./index.rsh:196:22:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc11, v2716, ctc0, null);
        const v9207 = ['Some', null];
        const v9208 = {
          None: 0,
          Some: 1
          }[v9207[0]];
        const v9209 = stdlib.eq(v9208, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v9209, {
          at: './index.rsh:201:48:application',
          fs: ['at ./index.rsh:199:39:application call to [unknown function] (defined at: ./index.rsh:199:39:function exp)'],
          msg: null,
          who: 'D'
          });
        if (v9204) {
          await stdlib.mapSet(map1, ctc11, v2716, ctc2, v2366);
          const v9210 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          await stdlib.mapSet(map3, ctc11, v2716, ctc5, v9210);
          await stdlib.mapSet(map4, ctc11, v2716, ctc5, v9210);
          await txn4.getOutput('Player_placeBet', 'v2366', ctc2, v2366);
          const v9218 = stdlib.safeAdd(v2376, v2366);
          const cv2376 = v9218;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        else {
          await stdlib.mapSet(map2, ctc11, v2716, ctc2, v2366);
          const v9220 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          await stdlib.mapSet(map3, ctc11, v2716, ctc5, v9220);
          await stdlib.mapSet(map4, ctc11, v2716, ctc5, v9220);
          await txn4.getOutput('Player_placeBet', 'v2366', ctc2, v2366);
          const v9228 = stdlib.safeAdd(v2376, v2366);
          const cv2376 = v9228;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Player_submitHand0_113': {
        const v9450 = v2717[1];
        undefined /* setApiDetails */;
        const v9537 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '0')];
        const v9540 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2716, ctc2), null);
        const v9541 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc11, v2716, ctc2), null);
        const v9542 = v9537 ? v9540 : v9541;
        const v9546 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc11, v2716, ctc5), null);
        const v9547 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc11, v2716, ctc5), null);
        const v9548 = v9537 ? v9546 : v9547;
        const v9554 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2716, ctc0), null);
        const v9555 = {
          None: 0,
          Some: 1
          }[v9554[0]];
        const v9556 = stdlib.eq(v9555, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v9556, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:336:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:329:78:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You did not place a bet on this game',
          who: 'D'
          });
        ;
        const v10578 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '1')];
        const v10579 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '2')];
        let v10583;
        switch (v9542[0]) {
          case 'None': {
            const v10584 = v9542[1];
            v10583 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v10585 = v9542[1];
            v10583 = v10585;
            
            break;
            }
          }
        let v10589;
        switch (v9548[0]) {
          case 'None': {
            const v10590 = v9548[1];
            const v10591 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            v10589 = v10591;
            
            break;
            }
          case 'Some': {
            const v10593 = v9548[1];
            v10589 = v10593;
            
            break;
            }
          }
        if (v9537) {
          const v10601 = v10589.boughtInsurance;
          const v10604 = v10589.doubledDown;
          const v10605 = v10589.surrendered;
          const v10606 = {
            boughtInsurance: v10601,
            cardCount: v10579,
            cardValue: v10578,
            doubledDown: v10604,
            surrendered: v10605
            };
          await stdlib.mapSet(map3, ctc11, v2716, ctc5, v10606);
          await txn4.getOutput('Player_submitHand', 'v10583', ctc2, v10583);
          const cv2376 = v2376;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        else {
          const v10616 = v10589.boughtInsurance;
          const v10619 = v10589.doubledDown;
          const v10620 = v10589.surrendered;
          const v10621 = {
            boughtInsurance: v10616,
            cardCount: v10579,
            cardValue: v10578,
            doubledDown: v10619,
            surrendered: v10620
            };
          await stdlib.mapSet(map4, ctc11, v2716, ctc5, v10621);
          await txn4.getOutput('Player_submitHand', 'v10583', ctc2, v10583);
          const cv2376 = v2376;
          const cv2377 = v2377;
          const cv2378 = v2378;
          const cv2379 = v2379;
          const cv2380 = true;
          const cv2381 = v2718;
          
          v2376 = cv2376;
          v2377 = cv2377;
          v2378 = cv2378;
          v2379 = cv2379;
          v2380 = cv2380;
          v2381 = cv2381;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Player_surrender0_113': {
        const v10796 = v2717[1];
        undefined /* setApiDetails */;
        const v10905 = v10796[stdlib.checkedBigNumberify('./index.rsh:292:22:spread', stdlib.UInt_max, '0')];
        const v10908 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2716, ctc2), null);
        const v10909 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc11, v2716, ctc2), null);
        const v10910 = v10905 ? v10908 : v10909;
        let v10911;
        switch (v10910[0]) {
          case 'None': {
            const v10912 = v10910[1];
            v10911 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v10913 = v10910[1];
            v10911 = v10913;
            
            break;
            }
          }
        const v10914 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2716, ctc0), null);
        const v10915 = {
          None: 0,
          Some: 1
          }[v10914[0]];
        const v10916 = stdlib.eq(v10915, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v10916, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:296:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You did not place a bet on this game',
          who: 'D'
          });
        const v10918 = stdlib.eq(v10911, v2366);
        stdlib.assert(v10918, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
          msg: 'You are not allowed to surrender at this point',
          who: 'D'
          });
        ;
        const v11979 = v10796[stdlib.checkedBigNumberify('./index.rsh:292:22:spread', stdlib.UInt_max, '1')];
        let v11984;
        switch (v10910[0]) {
          case 'None': {
            const v11985 = v10910[1];
            v11984 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v11986 = v10910[1];
            v11984 = v11986;
            
            break;
            }
          }
        const v11991 = stdlib.eq(v11984, v2366);
        stdlib.assert(v11991, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:303:39:application call to [unknown function] (defined at: ./index.rsh:303:39:function exp)'],
          msg: 'You are not allowed to surrender at this point',
          who: 'D'
          });
        const v11996 = stdlib.safeDiv(v11984, stdlib.checkedBigNumberify('./index.rsh:304:69:decimal', stdlib.UInt_max, '2'));
        const v11998 = stdlib.eq(v2378, stdlib.checkedBigNumberify('./index.rsh:34:27:decimal', stdlib.UInt_max, '21'));
        const v11999 = stdlib.eq(v2377, stdlib.checkedBigNumberify('./index.rsh:37:58:decimal', stdlib.UInt_max, '2'));
        const v12000 = stdlib.eq(v11979, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
        const v12174 = v12000 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v12175 = v11999 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '5') : v12174;
        const v11997 = v11998 ? v12175 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v12001 = stdlib.ge(v2376, v11996);
        if (v12001) {
          ;
          const v12006 = stdlib.eq(v11997, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v12007 = 'Dealer Wins         ';
          const v12008 = 'End                 ';
          const v12009 = v12006 ? v12007 : v12008;
          await txn4.getOutput('Player_surrender', 'v12009', ctc12, v12009);
          if (v10905) {
            await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
            const v12018 = ['None', null];
            const v12019 = {
              None: 0,
              Some: 1
              }[v12018[0]];
            const v12020 = stdlib.eq(v12019, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12021 = ['None', null];
            const v12022 = {
              None: 0,
              Some: 1
              }[v12021[0]];
            const v12023 = stdlib.eq(v12022, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12024 = v12020 ? v12023 : false;
            const v12026 = {
              None: 0,
              Some: 1
              }[v10909[0]];
            const v12027 = stdlib.eq(v12026, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12028 = v12024 ? v12027 : false;
            const v12029 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc11, v2716, ctc5), null);
            const v12030 = {
              None: 0,
              Some: 1
              }[v12029[0]];
            const v12031 = stdlib.eq(v12030, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12032 = v12028 ? v12031 : false;
            if (v12032) {
              await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
              const v12035 = stdlib.safeSub(v2376, v11996);
              const v12036 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12037 = stdlib.safeMul(v12036, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12038 = stdlib.ge(v12035, v12037);
              const cv2376 = v12035;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12038;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}
            else {
              const v12041 = stdlib.safeSub(v2376, v11996);
              const v12042 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12043 = stdlib.safeMul(v12042, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12044 = stdlib.ge(v12041, v12043);
              const cv2376 = v12041;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12044;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}}
          else {
            await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
            const v12047 = {
              None: 0,
              Some: 1
              }[v10908[0]];
            const v12048 = stdlib.eq(v12047, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12049 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc11, v2716, ctc5), null);
            const v12050 = {
              None: 0,
              Some: 1
              }[v12049[0]];
            const v12051 = stdlib.eq(v12050, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12052 = v12048 ? v12051 : false;
            const v12053 = ['None', null];
            const v12054 = {
              None: 0,
              Some: 1
              }[v12053[0]];
            const v12055 = stdlib.eq(v12054, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12056 = v12052 ? v12055 : false;
            const v12057 = ['None', null];
            const v12058 = {
              None: 0,
              Some: 1
              }[v12057[0]];
            const v12059 = stdlib.eq(v12058, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12060 = v12056 ? v12059 : false;
            if (v12060) {
              await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
              const v12063 = stdlib.safeSub(v2376, v11996);
              const v12064 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12065 = stdlib.safeMul(v12064, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12066 = stdlib.ge(v12063, v12065);
              const cv2376 = v12063;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12066;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}
            else {
              const v12069 = stdlib.safeSub(v2376, v11996);
              const v12070 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12071 = stdlib.safeMul(v12070, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12072 = stdlib.ge(v12069, v12071);
              const cv2376 = v12069;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12072;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}}}
        else {
          const v12074 = stdlib.eq(v11997, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v12075 = 'Dealer Wins         ';
          const v12076 = 'End                 ';
          const v12077 = v12074 ? v12075 : v12076;
          await txn4.getOutput('Player_surrender', 'v12077', ctc12, v12077);
          if (v10905) {
            await stdlib.mapSet(map1, ctc11, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map3, ctc11, v2716, ctc5, undefined /* Nothing */);
            const v12086 = ['None', null];
            const v12087 = {
              None: 0,
              Some: 1
              }[v12086[0]];
            const v12088 = stdlib.eq(v12087, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12089 = ['None', null];
            const v12090 = {
              None: 0,
              Some: 1
              }[v12089[0]];
            const v12091 = stdlib.eq(v12090, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12092 = v12088 ? v12091 : false;
            const v12094 = {
              None: 0,
              Some: 1
              }[v10909[0]];
            const v12095 = stdlib.eq(v12094, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12096 = v12092 ? v12095 : false;
            const v12097 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc11, v2716, ctc5), null);
            const v12098 = {
              None: 0,
              Some: 1
              }[v12097[0]];
            const v12099 = stdlib.eq(v12098, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12100 = v12096 ? v12099 : false;
            if (v12100) {
              await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
              const v12103 = stdlib.safeSub(v2376, v11996);
              const v12104 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12105 = stdlib.safeMul(v12104, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12106 = stdlib.ge(v12103, v12105);
              const cv2376 = v12103;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12106;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}
            else {
              const v12109 = stdlib.safeSub(v2376, v11996);
              const v12110 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12111 = stdlib.safeMul(v12110, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12112 = stdlib.ge(v12109, v12111);
              const cv2376 = v12109;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12112;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}}
          else {
            await stdlib.mapSet(map2, ctc11, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map4, ctc11, v2716, ctc5, undefined /* Nothing */);
            const v12115 = {
              None: 0,
              Some: 1
              }[v10908[0]];
            const v12116 = stdlib.eq(v12115, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12117 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc11, v2716, ctc5), null);
            const v12118 = {
              None: 0,
              Some: 1
              }[v12117[0]];
            const v12119 = stdlib.eq(v12118, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12120 = v12116 ? v12119 : false;
            const v12121 = ['None', null];
            const v12122 = {
              None: 0,
              Some: 1
              }[v12121[0]];
            const v12123 = stdlib.eq(v12122, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12124 = v12120 ? v12123 : false;
            const v12125 = ['None', null];
            const v12126 = {
              None: 0,
              Some: 1
              }[v12125[0]];
            const v12127 = stdlib.eq(v12126, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v12128 = v12124 ? v12127 : false;
            if (v12128) {
              await stdlib.mapSet(map0, ctc11, v2716, ctc0, undefined /* Nothing */);
              const v12131 = stdlib.safeSub(v2376, v11996);
              const v12132 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12133 = stdlib.safeMul(v12132, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12134 = stdlib.ge(v12131, v12133);
              const cv2376 = v12131;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12134;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}
            else {
              const v12137 = stdlib.safeSub(v2376, v11996);
              const v12138 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v12139 = stdlib.safeMul(v12138, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v12140 = stdlib.ge(v12137, v12139);
              const cv2376 = v12137;
              const cv2377 = v2377;
              const cv2378 = v2378;
              const cv2379 = v2379;
              const cv2380 = v12140;
              const cv2381 = v2718;
              
              v2376 = cv2376;
              v2377 = cv2377;
              v2378 = cv2378;
              v2379 = cv2379;
              v2380 = cv2380;
              v2381 = cv2381;
              
              txn3 = txn4;
              continue;}}}
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function _Dealer_submitHand4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Dealer_submitHand4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Dealer_submitHand4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc11 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc8,
    Player_buyInsurance0_113: ctc9,
    Player_doubleDown0_113: ctc9,
    Player_getOutcome0_113: ctc9,
    Player_placeBet0_113: ctc9,
    Player_submitHand0_113: ctc10,
    Player_surrender0_113: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2364, v2366, v2376, v2377, v2378, v2379] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4]);
  const v2578 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:459:65:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp)', 'at ./index.rsh:168:84:application call to "runDealer_submitHand0_113" (defined at: ./index.rsh:459:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'in',
    who: 'Dealer_submitHand'
    });
  const v2579 = v2578[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2580 = v2578[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2583 = stdlib.gt(v2580, stdlib.checkedBigNumberify('./index.rsh:460:43:decimal', stdlib.UInt_max, '0'));
  const v2584 = stdlib.gt(v2579, stdlib.checkedBigNumberify('./index.rsh:460:60:decimal', stdlib.UInt_max, '0'));
  const v2585 = v2583 ? v2584 : false;
  stdlib.assert(v2585, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:460:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:459:65:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp)', 'at ./index.rsh:168:84:application call to "runDealer_submitHand0_113" (defined at: ./index.rsh:459:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'Invalid submission',
    who: 'Dealer_submitHand'
    });
  const v2594 = ['Dealer_submitHand0_113', v2578];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2364, v2366, v2376, v2377, v2378, v2379, v2594],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:462:33:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Dealer_submitHand0_113': {
          const v2720 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Dealer_submitHand"
            });
          const v2725 = v2720[stdlib.checkedBigNumberify('./index.rsh:459:22:spread', stdlib.UInt_max, '0')];
          const v2726 = v2720[stdlib.checkedBigNumberify('./index.rsh:459:22:spread', stdlib.UInt_max, '1')];
          ;
          const v2855 = null;
          const v2856 = await txn1.getOutput('Dealer_submitHand', 'v2855', ctc0, v2855);
          
          const v23997 = v2376;
          const v23998 = v2726;
          const v23999 = v2725;
          const v24000 = true;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Player_buyInsurance0_113': {
          const v4066 = v2717[1];
          
          break;
          }
        case 'Player_doubleDown0_113': {
          const v5412 = v2717[1];
          
          break;
          }
        case 'Player_getOutcome0_113': {
          const v6758 = v2717[1];
          
          break;
          }
        case 'Player_placeBet0_113': {
          const v8104 = v2717[1];
          
          break;
          }
        case 'Player_submitHand0_113': {
          const v9450 = v2717[1];
          
          break;
          }
        case 'Player_surrender0_113': {
          const v10796 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Dealer_submitHand0_113': {
      const v2720 = v2717[1];
      undefined /* setApiDetails */;
      const v2725 = v2720[stdlib.checkedBigNumberify('./index.rsh:459:22:spread', stdlib.UInt_max, '0')];
      const v2726 = v2720[stdlib.checkedBigNumberify('./index.rsh:459:22:spread', stdlib.UInt_max, '1')];
      const v2727 = stdlib.gt(v2726, stdlib.checkedBigNumberify('./index.rsh:460:43:decimal', stdlib.UInt_max, '0'));
      const v2728 = stdlib.gt(v2725, stdlib.checkedBigNumberify('./index.rsh:460:60:decimal', stdlib.UInt_max, '0'));
      const v2729 = v2727 ? v2728 : false;
      stdlib.assert(v2729, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:460:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:459:65:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:459:65:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'Invalid submission',
        who: 'Dealer_submitHand'
        });
      ;
      const v2855 = null;
      const v2856 = await txn1.getOutput('Dealer_submitHand', 'v2855', ctc0, v2855);
      if (v1590) {
        stdlib.protect(ctc0, await interact.out(v2720, v2856), {
          at: './index.rsh:459:23:application',
          fs: ['at ./index.rsh:459:23:application call to [unknown function] (defined at: ./index.rsh:459:23:function exp)', 'at ./index.rsh:464:44:application call to "ret" (defined at: ./index.rsh:463:39:function exp)', 'at ./index.rsh:463:39:application call to [unknown function] (defined at: ./index.rsh:463:39:function exp)'],
          msg: 'out',
          who: 'Dealer_submitHand'
          });
        }
      else {
        }
      
      const v23997 = v2376;
      const v23998 = v2726;
      const v23999 = v2725;
      const v24000 = true;
      return;
      
      break;
      }
    case 'Player_buyInsurance0_113': {
      const v4066 = v2717[1];
      return;
      break;
      }
    case 'Player_doubleDown0_113': {
      const v5412 = v2717[1];
      return;
      break;
      }
    case 'Player_getOutcome0_113': {
      const v6758 = v2717[1];
      return;
      break;
      }
    case 'Player_placeBet0_113': {
      const v8104 = v2717[1];
      return;
      break;
      }
    case 'Player_submitHand0_113': {
      const v9450 = v2717[1];
      return;
      break;
      }
    case 'Player_surrender0_113': {
      const v10796 = v2717[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_buyInsurance4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_buyInsurance4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_buyInsurance4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc11 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc9,
    Player_buyInsurance0_113: ctc8,
    Player_doubleDown0_113: ctc8,
    Player_getOutcome0_113: ctc8,
    Player_placeBet0_113: ctc8,
    Player_submitHand0_113: ctc10,
    Player_surrender0_113: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2364, v2366, v2376, v2377, v2378, v2379] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4]);
  const v2436 = ctc.selfAddress();
  const v2438 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_buyInsurance0_113" (defined at: ./index.rsh:256:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'in',
    who: 'Player_buyInsurance'
    });
  const v2439 = v2438[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2447 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2436, ctc5), null);
  const v2448 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2436, ctc5), null);
  const v2449 = v2439 ? v2447 : v2448;
  let v2450;
  switch (v2449[0]) {
    case 'None': {
      const v2451 = v2449[1];
      const v2452 = {
        boughtInsurance: false,
        cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        doubledDown: false,
        surrendered: false
        };
      v2450 = v2452;
      
      break;
      }
    case 'Some': {
      const v2454 = v2449[1];
      v2450 = v2454;
      
      break;
      }
    }
  const v2455 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2436, ctc0), null);
  const v2456 = {
    None: 0,
    Some: 1
    }[v2455[0]];
  const v2457 = stdlib.eq(v2456, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2457, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_buyInsurance0_113" (defined at: ./index.rsh:256:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You did not place a bet on this game',
    who: 'Player_buyInsurance'
    });
  const v2459 = v2450.boughtInsurance;
  const v2460 = v2459 ? false : true;
  stdlib.assert(v2460, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_buyInsurance0_113" (defined at: ./index.rsh:256:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You cannot buy insurance twice',
    who: 'Player_buyInsurance'
    });
  const v2467 = ['Player_buyInsurance0_113', v2438];
  
  let v2614;
  switch (v2449[0]) {
    case 'None': {
      const v2615 = v2449[1];
      const v2616 = {
        boughtInsurance: false,
        cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        doubledDown: false,
        surrendered: false
        };
      v2614 = v2616;
      
      break;
      }
    case 'Some': {
      const v2618 = v2449[1];
      v2614 = v2618;
      
      break;
      }
    }
  const v2623 = v2614.boughtInsurance;
  const v2624 = v2623 ? false : true;
  stdlib.assert(v2624, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You cannot buy insurance twice',
    who: 'Player_buyInsurance'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2364, v2366, v2376, v2377, v2378, v2379, v2467],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v2366, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Dealer_submitHand0_113': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Player_buyInsurance0_113': {
          const v4066 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_buyInsurance"
            });
          const v4078 = v4066[stdlib.checkedBigNumberify('./index.rsh:256:22:spread', stdlib.UInt_max, '0')];
          const v4079 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc7, v2716, ctc2), null);
          const v4080 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc7, v2716, ctc2), null);
          const v4081 = v4078 ? v4079 : v4080;
          const v4085 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc7, v2716, ctc5), null);
          const v4086 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc7, v2716, ctc5), null);
          const v4087 = v4078 ? v4085 : v4086;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2716, ctc0), null);
          sim_r.txns.push({
            amt: v2366,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          let v4215;
          switch (v4081[0]) {
            case 'None': {
              const v4216 = v4081[1];
              v4215 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v4217 = v4081[1];
              v4215 = v4217;
              
              break;
              }
            }
          let v4221;
          switch (v4087[0]) {
            case 'None': {
              const v4222 = v4087[1];
              const v4223 = {
                boughtInsurance: false,
                cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                doubledDown: false,
                surrendered: false
                };
              v4221 = v4223;
              
              break;
              }
            case 'Some': {
              const v4225 = v4087[1];
              v4221 = v4225;
              
              break;
              }
            }
          if (v4078) {
            const v4234 = stdlib.safeAdd(v2366, v4215);
            await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, v4234);
            const v4236 = v4221.cardCount;
            const v4237 = v4221.cardValue;
            const v4238 = v4221.doubledDown;
            const v4239 = v4221.surrendered;
            const v4240 = {
              boughtInsurance: true,
              cardCount: v4236,
              cardValue: v4237,
              doubledDown: v4238,
              surrendered: v4239
              };
            await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, v4240);
            const v4242 = await txn1.getOutput('Player_buyInsurance', 'v4234', ctc2, v4234);
            
            const v4248 = stdlib.safeAdd(v2376, v2366);
            const v24321 = v4248;
            const v24322 = v2377;
            const v24323 = v2378;
            const v24324 = v2379;
            sim_r.isHalt = false;
            }
          else {
            const v4250 = stdlib.safeAdd(v2366, v4215);
            await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, v4250);
            const v4252 = v4221.cardCount;
            const v4253 = v4221.cardValue;
            const v4254 = v4221.doubledDown;
            const v4255 = v4221.surrendered;
            const v4256 = {
              boughtInsurance: true,
              cardCount: v4252,
              cardValue: v4253,
              doubledDown: v4254,
              surrendered: v4255
              };
            await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, v4256);
            const v4258 = await txn1.getOutput('Player_buyInsurance', 'v4250', ctc2, v4250);
            
            const v4264 = stdlib.safeAdd(v2376, v2366);
            const v24327 = v4264;
            const v24328 = v2377;
            const v24329 = v2378;
            const v24330 = v2379;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Player_doubleDown0_113': {
          const v5412 = v2717[1];
          
          break;
          }
        case 'Player_getOutcome0_113': {
          const v6758 = v2717[1];
          
          break;
          }
        case 'Player_placeBet0_113': {
          const v8104 = v2717[1];
          
          break;
          }
        case 'Player_submitHand0_113': {
          const v9450 = v2717[1];
          
          break;
          }
        case 'Player_surrender0_113': {
          const v10796 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Dealer_submitHand0_113': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Player_buyInsurance0_113': {
      const v4066 = v2717[1];
      undefined /* setApiDetails */;
      const v4078 = v4066[stdlib.checkedBigNumberify('./index.rsh:256:22:spread', stdlib.UInt_max, '0')];
      const v4079 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2716, ctc2), null);
      const v4080 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2716, ctc2), null);
      const v4081 = v4078 ? v4079 : v4080;
      const v4085 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2716, ctc5), null);
      const v4086 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2716, ctc5), null);
      const v4087 = v4078 ? v4085 : v4086;
      let v4088;
      switch (v4087[0]) {
        case 'None': {
          const v4089 = v4087[1];
          const v4090 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          v4088 = v4090;
          
          break;
          }
        case 'Some': {
          const v4092 = v4087[1];
          v4088 = v4092;
          
          break;
          }
        }
      const v4093 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2716, ctc0), null);
      const v4094 = {
        None: 0,
        Some: 1
        }[v4093[0]];
      const v4095 = stdlib.eq(v4094, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4095, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You did not place a bet on this game',
        who: 'Player_buyInsurance'
        });
      const v4097 = v4088.boughtInsurance;
      const v4098 = v4097 ? false : true;
      stdlib.assert(v4098, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:58:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:256:58:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You cannot buy insurance twice',
        who: 'Player_buyInsurance'
        });
      ;
      let v4215;
      switch (v4081[0]) {
        case 'None': {
          const v4216 = v4081[1];
          v4215 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v4217 = v4081[1];
          v4215 = v4217;
          
          break;
          }
        }
      let v4221;
      switch (v4087[0]) {
        case 'None': {
          const v4222 = v4087[1];
          const v4223 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          v4221 = v4223;
          
          break;
          }
        case 'Some': {
          const v4225 = v4087[1];
          v4221 = v4225;
          
          break;
          }
        }
      const v4230 = v4221.boughtInsurance;
      const v4231 = v4230 ? false : true;
      stdlib.assert(v4231, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:264:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:267:39:application call to [unknown function] (defined at: ./index.rsh:267:39:function exp)'],
        msg: 'You cannot buy insurance twice',
        who: 'Player_buyInsurance'
        });
      if (v4078) {
        const v4234 = stdlib.safeAdd(v2366, v4215);
        await stdlib.mapSet(map1, ctc7, v2716, ctc2, v4234);
        const v4236 = v4221.cardCount;
        const v4237 = v4221.cardValue;
        const v4238 = v4221.doubledDown;
        const v4239 = v4221.surrendered;
        const v4240 = {
          boughtInsurance: true,
          cardCount: v4236,
          cardValue: v4237,
          doubledDown: v4238,
          surrendered: v4239
          };
        await stdlib.mapSet(map3, ctc7, v2716, ctc5, v4240);
        const v4242 = await txn1.getOutput('Player_buyInsurance', 'v4234', ctc2, v4234);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v4066, v4242), {
            at: './index.rsh:256:23:application',
            fs: ['at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:281:44:application call to "ret" (defined at: ./index.rsh:267:39:function exp)', 'at ./index.rsh:267:39:application call to [unknown function] (defined at: ./index.rsh:267:39:function exp)'],
            msg: 'out',
            who: 'Player_buyInsurance'
            });
          }
        else {
          }
        
        const v4248 = stdlib.safeAdd(v2376, v2366);
        const v24321 = v4248;
        const v24322 = v2377;
        const v24323 = v2378;
        const v24324 = v2379;
        return;
        }
      else {
        const v4250 = stdlib.safeAdd(v2366, v4215);
        await stdlib.mapSet(map2, ctc7, v2716, ctc2, v4250);
        const v4252 = v4221.cardCount;
        const v4253 = v4221.cardValue;
        const v4254 = v4221.doubledDown;
        const v4255 = v4221.surrendered;
        const v4256 = {
          boughtInsurance: true,
          cardCount: v4252,
          cardValue: v4253,
          doubledDown: v4254,
          surrendered: v4255
          };
        await stdlib.mapSet(map4, ctc7, v2716, ctc5, v4256);
        const v4258 = await txn1.getOutput('Player_buyInsurance', 'v4250', ctc2, v4250);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v4066, v4258), {
            at: './index.rsh:256:23:application',
            fs: ['at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:281:44:application call to "ret" (defined at: ./index.rsh:267:39:function exp)', 'at ./index.rsh:267:39:application call to [unknown function] (defined at: ./index.rsh:267:39:function exp)'],
            msg: 'out',
            who: 'Player_buyInsurance'
            });
          }
        else {
          }
        
        const v4264 = stdlib.safeAdd(v2376, v2366);
        const v24327 = v4264;
        const v24328 = v2377;
        const v24329 = v2378;
        const v24330 = v2379;
        return;
        }
      break;
      }
    case 'Player_doubleDown0_113': {
      const v5412 = v2717[1];
      return;
      break;
      }
    case 'Player_getOutcome0_113': {
      const v6758 = v2717[1];
      return;
      break;
      }
    case 'Player_placeBet0_113': {
      const v8104 = v2717[1];
      return;
      break;
      }
    case 'Player_submitHand0_113': {
      const v9450 = v2717[1];
      return;
      break;
      }
    case 'Player_surrender0_113': {
      const v10796 = v2717[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_doubleDown4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_doubleDown4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_doubleDown4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc11 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc9,
    Player_buyInsurance0_113: ctc8,
    Player_doubleDown0_113: ctc8,
    Player_getOutcome0_113: ctc8,
    Player_placeBet0_113: ctc8,
    Player_submitHand0_113: ctc10,
    Player_surrender0_113: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2364, v2366, v2376, v2377, v2378, v2379] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4]);
  const v2403 = ctc.selfAddress();
  const v2405 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_doubleDown0_113" (defined at: ./index.rsh:220:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'in',
    who: 'Player_doubleDown'
    });
  const v2406 = v2405[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2414 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2403, ctc5), null);
  const v2415 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2403, ctc5), null);
  const v2416 = v2406 ? v2414 : v2415;
  let v2417;
  switch (v2416[0]) {
    case 'None': {
      const v2418 = v2416[1];
      const v2419 = {
        boughtInsurance: false,
        cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        doubledDown: false,
        surrendered: false
        };
      v2417 = v2419;
      
      break;
      }
    case 'Some': {
      const v2421 = v2416[1];
      v2417 = v2421;
      
      break;
      }
    }
  const v2422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2403, ctc0), null);
  const v2423 = {
    None: 0,
    Some: 1
    }[v2422[0]];
  const v2424 = stdlib.eq(v2423, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2424, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:227:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_doubleDown0_113" (defined at: ./index.rsh:220:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You did not place a bet on this game',
    who: 'Player_doubleDown'
    });
  const v2426 = v2417.doubledDown;
  const v2427 = v2426 ? false : true;
  stdlib.assert(v2427, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_doubleDown0_113" (defined at: ./index.rsh:220:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You cannot double down twice',
    who: 'Player_doubleDown'
    });
  const v2434 = ['Player_doubleDown0_113', v2405];
  
  let v2637;
  switch (v2416[0]) {
    case 'None': {
      const v2638 = v2416[1];
      const v2639 = {
        boughtInsurance: false,
        cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        doubledDown: false,
        surrendered: false
        };
      v2637 = v2639;
      
      break;
      }
    case 'Some': {
      const v2641 = v2416[1];
      v2637 = v2641;
      
      break;
      }
    }
  const v2646 = v2637.doubledDown;
  const v2647 = v2646 ? false : true;
  stdlib.assert(v2647, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You cannot double down twice',
    who: 'Player_doubleDown'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2364, v2366, v2376, v2377, v2378, v2379, v2434],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v2366, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Dealer_submitHand0_113': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Player_buyInsurance0_113': {
          const v4066 = v2717[1];
          
          break;
          }
        case 'Player_doubleDown0_113': {
          const v5412 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_doubleDown"
            });
          const v5447 = v5412[stdlib.checkedBigNumberify('./index.rsh:220:22:spread', stdlib.UInt_max, '0')];
          const v5448 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc7, v2716, ctc2), null);
          const v5449 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc7, v2716, ctc2), null);
          const v5450 = v5447 ? v5448 : v5449;
          const v5454 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc7, v2716, ctc5), null);
          const v5455 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc7, v2716, ctc5), null);
          const v5456 = v5447 ? v5454 : v5455;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2716, ctc0), null);
          sim_r.txns.push({
            amt: v2366,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          let v5617;
          switch (v5450[0]) {
            case 'None': {
              const v5618 = v5450[1];
              v5617 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v5619 = v5450[1];
              v5617 = v5619;
              
              break;
              }
            }
          let v5623;
          switch (v5456[0]) {
            case 'None': {
              const v5624 = v5456[1];
              const v5625 = {
                boughtInsurance: false,
                cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                doubledDown: false,
                surrendered: false
                };
              v5623 = v5625;
              
              break;
              }
            case 'Some': {
              const v5627 = v5456[1];
              v5623 = v5627;
              
              break;
              }
            }
          if (v5447) {
            const v5636 = stdlib.safeAdd(v2366, v5617);
            await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, v5636);
            const v5637 = v5623.boughtInsurance;
            const v5638 = v5623.cardCount;
            const v5639 = v5623.cardValue;
            const v5641 = v5623.surrendered;
            const v5642 = {
              boughtInsurance: v5637,
              cardCount: v5638,
              cardValue: v5639,
              doubledDown: true,
              surrendered: v5641
              };
            await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, v5642);
            const v5644 = await txn1.getOutput('Player_doubleDown', 'v5636', ctc2, v5636);
            
            const v5650 = stdlib.safeAdd(v2376, v2366);
            const v24651 = v5650;
            const v24652 = v2377;
            const v24653 = v2378;
            const v24654 = v2379;
            sim_r.isHalt = false;
            }
          else {
            const v5652 = stdlib.safeAdd(v2366, v5617);
            await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, v5652);
            const v5653 = v5623.boughtInsurance;
            const v5654 = v5623.cardCount;
            const v5655 = v5623.cardValue;
            const v5657 = v5623.surrendered;
            const v5658 = {
              boughtInsurance: v5653,
              cardCount: v5654,
              cardValue: v5655,
              doubledDown: true,
              surrendered: v5657
              };
            await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, v5658);
            const v5660 = await txn1.getOutput('Player_doubleDown', 'v5652', ctc2, v5652);
            
            const v5666 = stdlib.safeAdd(v2376, v2366);
            const v24657 = v5666;
            const v24658 = v2377;
            const v24659 = v2378;
            const v24660 = v2379;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Player_getOutcome0_113': {
          const v6758 = v2717[1];
          
          break;
          }
        case 'Player_placeBet0_113': {
          const v8104 = v2717[1];
          
          break;
          }
        case 'Player_submitHand0_113': {
          const v9450 = v2717[1];
          
          break;
          }
        case 'Player_surrender0_113': {
          const v10796 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Dealer_submitHand0_113': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Player_buyInsurance0_113': {
      const v4066 = v2717[1];
      return;
      break;
      }
    case 'Player_doubleDown0_113': {
      const v5412 = v2717[1];
      undefined /* setApiDetails */;
      const v5447 = v5412[stdlib.checkedBigNumberify('./index.rsh:220:22:spread', stdlib.UInt_max, '0')];
      const v5448 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2716, ctc2), null);
      const v5449 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2716, ctc2), null);
      const v5450 = v5447 ? v5448 : v5449;
      const v5454 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2716, ctc5), null);
      const v5455 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2716, ctc5), null);
      const v5456 = v5447 ? v5454 : v5455;
      let v5457;
      switch (v5456[0]) {
        case 'None': {
          const v5458 = v5456[1];
          const v5459 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          v5457 = v5459;
          
          break;
          }
        case 'Some': {
          const v5461 = v5456[1];
          v5457 = v5461;
          
          break;
          }
        }
      const v5462 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2716, ctc0), null);
      const v5463 = {
        None: 0,
        Some: 1
        }[v5462[0]];
      const v5464 = stdlib.eq(v5463, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5464, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:227:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You did not place a bet on this game',
        who: 'Player_doubleDown'
        });
      const v5466 = v5457.doubledDown;
      const v5467 = v5466 ? false : true;
      stdlib.assert(v5467, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:56:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:220:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You cannot double down twice',
        who: 'Player_doubleDown'
        });
      ;
      let v5617;
      switch (v5450[0]) {
        case 'None': {
          const v5618 = v5450[1];
          v5617 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5619 = v5450[1];
          v5617 = v5619;
          
          break;
          }
        }
      let v5623;
      switch (v5456[0]) {
        case 'None': {
          const v5624 = v5456[1];
          const v5625 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          v5623 = v5625;
          
          break;
          }
        case 'Some': {
          const v5627 = v5456[1];
          v5623 = v5627;
          
          break;
          }
        }
      const v5632 = v5623.doubledDown;
      const v5633 = v5632 ? false : true;
      stdlib.assert(v5633, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:228:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:39:application call to [unknown function] (defined at: ./index.rsh:231:39:function exp)'],
        msg: 'You cannot double down twice',
        who: 'Player_doubleDown'
        });
      if (v5447) {
        const v5636 = stdlib.safeAdd(v2366, v5617);
        await stdlib.mapSet(map1, ctc7, v2716, ctc2, v5636);
        const v5637 = v5623.boughtInsurance;
        const v5638 = v5623.cardCount;
        const v5639 = v5623.cardValue;
        const v5641 = v5623.surrendered;
        const v5642 = {
          boughtInsurance: v5637,
          cardCount: v5638,
          cardValue: v5639,
          doubledDown: true,
          surrendered: v5641
          };
        await stdlib.mapSet(map3, ctc7, v2716, ctc5, v5642);
        const v5644 = await txn1.getOutput('Player_doubleDown', 'v5636', ctc2, v5636);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v5412, v5644), {
            at: './index.rsh:220:23:application',
            fs: ['at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)', 'at ./index.rsh:245:44:application call to "ret" (defined at: ./index.rsh:231:39:function exp)', 'at ./index.rsh:231:39:application call to [unknown function] (defined at: ./index.rsh:231:39:function exp)'],
            msg: 'out',
            who: 'Player_doubleDown'
            });
          }
        else {
          }
        
        const v5650 = stdlib.safeAdd(v2376, v2366);
        const v24651 = v5650;
        const v24652 = v2377;
        const v24653 = v2378;
        const v24654 = v2379;
        return;
        }
      else {
        const v5652 = stdlib.safeAdd(v2366, v5617);
        await stdlib.mapSet(map2, ctc7, v2716, ctc2, v5652);
        const v5653 = v5623.boughtInsurance;
        const v5654 = v5623.cardCount;
        const v5655 = v5623.cardValue;
        const v5657 = v5623.surrendered;
        const v5658 = {
          boughtInsurance: v5653,
          cardCount: v5654,
          cardValue: v5655,
          doubledDown: true,
          surrendered: v5657
          };
        await stdlib.mapSet(map4, ctc7, v2716, ctc5, v5658);
        const v5660 = await txn1.getOutput('Player_doubleDown', 'v5652', ctc2, v5652);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v5412, v5660), {
            at: './index.rsh:220:23:application',
            fs: ['at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)', 'at ./index.rsh:245:44:application call to "ret" (defined at: ./index.rsh:231:39:function exp)', 'at ./index.rsh:231:39:application call to [unknown function] (defined at: ./index.rsh:231:39:function exp)'],
            msg: 'out',
            who: 'Player_doubleDown'
            });
          }
        else {
          }
        
        const v5666 = stdlib.safeAdd(v2376, v2366);
        const v24657 = v5666;
        const v24658 = v2377;
        const v24659 = v2378;
        const v24660 = v2379;
        return;
        }
      break;
      }
    case 'Player_getOutcome0_113': {
      const v6758 = v2717[1];
      return;
      break;
      }
    case 'Player_placeBet0_113': {
      const v8104 = v2717[1];
      return;
      break;
      }
    case 'Player_submitHand0_113': {
      const v9450 = v2717[1];
      return;
      break;
      }
    case 'Player_surrender0_113': {
      const v10796 = v2717[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_getOutcome4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getOutcome4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getOutcome4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc11 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc9,
    Player_buyInsurance0_113: ctc8,
    Player_doubleDown0_113: ctc8,
    Player_getOutcome0_113: ctc8,
    Player_placeBet0_113: ctc8,
    Player_submitHand0_113: ctc10,
    Player_surrender0_113: ctc10
    });
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2364, v2366, v2376, v2377, v2378, v2379] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4]);
  const v2539 = ctc.selfAddress();
  const v2541 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_getOutcome0_113" (defined at: ./index.rsh:358:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'in',
    who: 'Player_getOutcome'
    });
  const v2542 = v2541[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2550 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2539, ctc5), null);
  const v2551 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2539, ctc5), null);
  const v2552 = v2542 ? v2550 : v2551;
  let v2553;
  switch (v2552[0]) {
    case 'None': {
      const v2554 = v2552[1];
      const v2555 = {
        boughtInsurance: false,
        cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        doubledDown: false,
        surrendered: false
        };
      v2553 = v2555;
      
      break;
      }
    case 'Some': {
      const v2557 = v2552[1];
      v2553 = v2557;
      
      break;
      }
    }
  const v2558 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2539, ctc0), null);
  const v2559 = {
    None: 0,
    Some: 1
    }[v2558[0]];
  const v2560 = stdlib.eq(v2559, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2560, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:365:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_getOutcome0_113" (defined at: ./index.rsh:358:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You did not place a bet on this game',
    who: 'Player_getOutcome'
    });
  stdlib.assert(v2379, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:366:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_getOutcome0_113" (defined at: ./index.rsh:358:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'The Dealer is yet to submit his hand',
    who: 'Player_getOutcome'
    });
  const v2563 = v2553.cardCount;
  const v2564 = stdlib.gt(v2563, stdlib.checkedBigNumberify('./index.rsh:368:56:decimal', stdlib.UInt_max, '0'));
  const v2565 = v2553.cardValue;
  const v2566 = stdlib.gt(v2565, stdlib.checkedBigNumberify('./index.rsh:368:84:decimal', stdlib.UInt_max, '0'));
  const v2567 = v2564 ? v2566 : false;
  stdlib.assert(v2567, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_getOutcome0_113" (defined at: ./index.rsh:358:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'Invalid submission',
    who: 'Player_getOutcome'
    });
  const v2574 = ['Player_getOutcome0_113', v2541];
  
  let v2660;
  switch (v2552[0]) {
    case 'None': {
      const v2661 = v2552[1];
      const v2662 = {
        boughtInsurance: false,
        cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        doubledDown: false,
        surrendered: false
        };
      v2660 = v2662;
      
      break;
      }
    case 'Some': {
      const v2664 = v2552[1];
      v2660 = v2664;
      
      break;
      }
    }
  const v2670 = v2660.cardCount;
  const v2671 = stdlib.gt(v2670, stdlib.checkedBigNumberify('./index.rsh:368:56:decimal', stdlib.UInt_max, '0'));
  const v2672 = v2660.cardValue;
  const v2673 = stdlib.gt(v2672, stdlib.checkedBigNumberify('./index.rsh:368:84:decimal', stdlib.UInt_max, '0'));
  const v2674 = v2671 ? v2673 : false;
  stdlib.assert(v2674, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'Invalid submission',
    who: 'Player_getOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2364, v2366, v2376, v2377, v2378, v2379, v2574],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:372:33:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Dealer_submitHand0_113': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Player_buyInsurance0_113': {
          const v4066 = v2717[1];
          
          break;
          }
        case 'Player_doubleDown0_113': {
          const v5412 = v2717[1];
          
          break;
          }
        case 'Player_getOutcome0_113': {
          const v6758 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_getOutcome"
            });
          const v6816 = v6758[stdlib.checkedBigNumberify('./index.rsh:358:22:spread', stdlib.UInt_max, '0')];
          const v6817 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc7, v2716, ctc2), null);
          const v6818 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc7, v2716, ctc2), null);
          const v6819 = v6816 ? v6817 : v6818;
          const v6823 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc7, v2716, ctc5), null);
          const v6824 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc7, v2716, ctc5), null);
          const v6825 = v6816 ? v6823 : v6824;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2716, ctc0), null);
          ;
          let v7019;
          switch (v6819[0]) {
            case 'None': {
              const v7020 = v6819[1];
              v7019 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v7021 = v6819[1];
              v7019 = v7021;
              
              break;
              }
            }
          let v7025;
          switch (v6825[0]) {
            case 'None': {
              const v7026 = v6825[1];
              const v7027 = {
                boughtInsurance: false,
                cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                doubledDown: false,
                surrendered: false
                };
              v7025 = v7027;
              
              break;
              }
            case 'Some': {
              const v7029 = v6825[1];
              v7025 = v7029;
              
              break;
              }
            }
          const v7035 = v7025.cardCount;
          const v7037 = v7025.cardValue;
          const v7044 = v7025.boughtInsurance;
          const v7045 = v7025.surrendered;
          const v7047 = stdlib.eq(v2378, stdlib.checkedBigNumberify('./index.rsh:34:27:decimal', stdlib.UInt_max, '21'));
          const v7048 = stdlib.eq(v2377, stdlib.checkedBigNumberify('./index.rsh:35:55:decimal', stdlib.UInt_max, '2'));
          const v7049 = v7044 ? v7048 : false;
          const v7051 = v7045 ? v7048 : false;
          const v7052 = stdlib.eq(v7037, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
          const v12161 = v7052 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v12162 = v7051 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '5') : v12161;
          const v12163 = v7049 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3') : v12162;
          const v7053 = stdlib.gt(v2378, stdlib.checkedBigNumberify('./index.rsh:46:33:decimal', stdlib.UInt_max, '21'));
          const v7054 = stdlib.lt(v7037, stdlib.checkedBigNumberify('./index.rsh:47:33:decimal', stdlib.UInt_max, '22'));
          const v7056 = stdlib.eq(v7035, stdlib.checkedBigNumberify('./index.rsh:48:61:decimal', stdlib.UInt_max, '2'));
          const v7057 = v7052 ? v7056 : false;
          const v12164 = v7057 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          const v12165 = v7054 ? v12164 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v7058 = stdlib.lt(v2378, stdlib.checkedBigNumberify('./index.rsh:56:33:decimal', stdlib.UInt_max, '21'));
          const v7059 = stdlib.gt(v2378, v7037);
          const v7060 = stdlib.gt(v7037, v2378);
          const v12166 = v7054 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v12167 = v7057 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4') : v12166;
          const v7065 = stdlib.eq(v7037, v2378);
          const v12168 = v7065 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v12169 = v7060 ? v12167 : v12168;
          const v12170 = v7059 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v12169;
          const v12171 = v7058 ? v12170 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v12172 = v7053 ? v12165 : v12171;
          const v12173 = v7045 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v12172;
          const v7046 = v7047 ? v12163 : v12173;
          const v7066 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v7066) {
            const v7068 = v7044 ? v2366 : stdlib.checkedBigNumberify('./index.rsh:386:111:decimal', stdlib.UInt_max, '0');
            const v7069 = stdlib.safeSub(v7019, v7068);
            const v7070 = stdlib.safeMul(v7069, stdlib.checkedBigNumberify('./index.rsh:387:69:decimal', stdlib.UInt_max, '2'));
            const v7071 = stdlib.ge(v2376, v7070);
            if (v7071) {
              sim_r.txns.push({
                kind: 'from',
                to: v2716,
                tok: undefined /* Nothing */
                });
              const v7077 = 'Player Wins         ';
              const v7078 = await txn1.getOutput('Player_getOutcome', 'v7077', ctc12, v7077);
              
              const v7085 = stdlib.safeSub(v2376, v7070);
              if (v6816) {
                await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7086 = ['None', null];
                const v7087 = {
                  None: 0,
                  Some: 1
                  }[v7086[0]];
                const v7088 = stdlib.eq(v7087, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7089 = ['None', null];
                const v7090 = {
                  None: 0,
                  Some: 1
                  }[v7089[0]];
                const v7091 = stdlib.eq(v7090, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7092 = v7088 ? v7091 : false;
                const v7094 = {
                  None: 0,
                  Some: 1
                  }[v6818[0]];
                const v7095 = stdlib.eq(v7094, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7096 = v7092 ? v7095 : false;
                const v7098 = {
                  None: 0,
                  Some: 1
                  }[v6824[0]];
                const v7099 = stdlib.eq(v7098, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7100 = v7096 ? v7099 : false;
                if (v7100) {
                  await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7103 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7104 = stdlib.safeMul(v7103, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7105 = stdlib.ge(v7085, v7104);
                  const v24981 = v7085;
                  const v24982 = v2377;
                  const v24983 = v2378;
                  const v24984 = true;
                  if (v7105) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v7114 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7115 = stdlib.safeMul(v7114, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7116 = stdlib.ge(v7085, v7115);
                  const v24987 = v7085;
                  const v24988 = v2377;
                  const v24989 = v2378;
                  const v24990 = true;
                  if (v7116) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}
              else {
                await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7125 = {
                  None: 0,
                  Some: 1
                  }[v6817[0]];
                const v7126 = stdlib.eq(v7125, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7128 = {
                  None: 0,
                  Some: 1
                  }[v6823[0]];
                const v7129 = stdlib.eq(v7128, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7130 = v7126 ? v7129 : false;
                const v7131 = ['None', null];
                const v7132 = {
                  None: 0,
                  Some: 1
                  }[v7131[0]];
                const v7133 = stdlib.eq(v7132, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7134 = v7130 ? v7133 : false;
                const v7135 = ['None', null];
                const v7136 = {
                  None: 0,
                  Some: 1
                  }[v7135[0]];
                const v7137 = stdlib.eq(v7136, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7138 = v7134 ? v7137 : false;
                if (v7138) {
                  await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7141 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7142 = stdlib.safeMul(v7141, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7143 = stdlib.ge(v7085, v7142);
                  const v24993 = v7085;
                  const v24994 = v2377;
                  const v24995 = v2378;
                  const v24996 = true;
                  if (v7143) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v7152 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7153 = stdlib.safeMul(v7152, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7154 = stdlib.ge(v7085, v7153);
                  const v24999 = v7085;
                  const v25000 = v2377;
                  const v25001 = v2378;
                  const v25002 = true;
                  if (v7154) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}
            else {
              const v7162 = 'Player Wins         ';
              const v7163 = await txn1.getOutput('Player_getOutcome', 'v7162', ctc12, v7162);
              
              const v7170 = stdlib.safeSub(v2376, v7070);
              if (v6816) {
                await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7171 = ['None', null];
                const v7172 = {
                  None: 0,
                  Some: 1
                  }[v7171[0]];
                const v7173 = stdlib.eq(v7172, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7174 = ['None', null];
                const v7175 = {
                  None: 0,
                  Some: 1
                  }[v7174[0]];
                const v7176 = stdlib.eq(v7175, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7177 = v7173 ? v7176 : false;
                const v7179 = {
                  None: 0,
                  Some: 1
                  }[v6818[0]];
                const v7180 = stdlib.eq(v7179, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7181 = v7177 ? v7180 : false;
                const v7183 = {
                  None: 0,
                  Some: 1
                  }[v6824[0]];
                const v7184 = stdlib.eq(v7183, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7185 = v7181 ? v7184 : false;
                if (v7185) {
                  await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7188 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7189 = stdlib.safeMul(v7188, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7190 = stdlib.ge(v7170, v7189);
                  const v25005 = v7170;
                  const v25006 = v2377;
                  const v25007 = v2378;
                  const v25008 = true;
                  if (v7190) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v7199 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7200 = stdlib.safeMul(v7199, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7201 = stdlib.ge(v7170, v7200);
                  const v25011 = v7170;
                  const v25012 = v2377;
                  const v25013 = v2378;
                  const v25014 = true;
                  if (v7201) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}
              else {
                await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7210 = {
                  None: 0,
                  Some: 1
                  }[v6817[0]];
                const v7211 = stdlib.eq(v7210, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7213 = {
                  None: 0,
                  Some: 1
                  }[v6823[0]];
                const v7214 = stdlib.eq(v7213, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7215 = v7211 ? v7214 : false;
                const v7216 = ['None', null];
                const v7217 = {
                  None: 0,
                  Some: 1
                  }[v7216[0]];
                const v7218 = stdlib.eq(v7217, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7219 = v7215 ? v7218 : false;
                const v7220 = ['None', null];
                const v7221 = {
                  None: 0,
                  Some: 1
                  }[v7220[0]];
                const v7222 = stdlib.eq(v7221, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7223 = v7219 ? v7222 : false;
                if (v7223) {
                  await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7226 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7227 = stdlib.safeMul(v7226, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7228 = stdlib.ge(v7170, v7227);
                  const v25017 = v7170;
                  const v25018 = v2377;
                  const v25019 = v2378;
                  const v25020 = true;
                  if (v7228) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v7237 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7238 = stdlib.safeMul(v7237, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7239 = stdlib.ge(v7170, v7238);
                  const v25023 = v7170;
                  const v25024 = v2377;
                  const v25025 = v2378;
                  const v25026 = true;
                  if (v7239) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}}
          else {
            const v7247 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            if (v7247) {
              const v7248 = 'Dealer Wins         ';
              const v7249 = await txn1.getOutput('Player_getOutcome', 'v7248', ctc12, v7248);
              
              if (v6816) {
                await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7255 = ['None', null];
                const v7256 = {
                  None: 0,
                  Some: 1
                  }[v7255[0]];
                const v7257 = stdlib.eq(v7256, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7258 = ['None', null];
                const v7259 = {
                  None: 0,
                  Some: 1
                  }[v7258[0]];
                const v7260 = stdlib.eq(v7259, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7261 = v7257 ? v7260 : false;
                const v7263 = {
                  None: 0,
                  Some: 1
                  }[v6818[0]];
                const v7264 = stdlib.eq(v7263, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7265 = v7261 ? v7264 : false;
                const v7267 = {
                  None: 0,
                  Some: 1
                  }[v6824[0]];
                const v7268 = stdlib.eq(v7267, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7269 = v7265 ? v7268 : false;
                if (v7269) {
                  await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7272 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7273 = stdlib.safeMul(v7272, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7274 = stdlib.ge(v2376, v7273);
                  const v25029 = v2376;
                  const v25030 = v2377;
                  const v25031 = v2378;
                  const v25032 = true;
                  if (v7274) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v7283 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7284 = stdlib.safeMul(v7283, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7285 = stdlib.ge(v2376, v7284);
                  const v25035 = v2376;
                  const v25036 = v2377;
                  const v25037 = v2378;
                  const v25038 = true;
                  if (v7285) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}
              else {
                await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7294 = {
                  None: 0,
                  Some: 1
                  }[v6817[0]];
                const v7295 = stdlib.eq(v7294, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7297 = {
                  None: 0,
                  Some: 1
                  }[v6823[0]];
                const v7298 = stdlib.eq(v7297, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7299 = v7295 ? v7298 : false;
                const v7300 = ['None', null];
                const v7301 = {
                  None: 0,
                  Some: 1
                  }[v7300[0]];
                const v7302 = stdlib.eq(v7301, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7303 = v7299 ? v7302 : false;
                const v7304 = ['None', null];
                const v7305 = {
                  None: 0,
                  Some: 1
                  }[v7304[0]];
                const v7306 = stdlib.eq(v7305, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7307 = v7303 ? v7306 : false;
                if (v7307) {
                  await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7310 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7311 = stdlib.safeMul(v7310, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7312 = stdlib.ge(v2376, v7311);
                  const v25041 = v2376;
                  const v25042 = v2377;
                  const v25043 = v2378;
                  const v25044 = true;
                  if (v7312) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v7321 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7322 = stdlib.safeMul(v7321, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7323 = stdlib.ge(v2376, v7322);
                  const v25047 = v2376;
                  const v25048 = v2377;
                  const v25049 = v2378;
                  const v25050 = true;
                  if (v7323) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2364,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}
            else {
              const v7331 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              if (v7331) {
                const v7333 = v7044 ? v2366 : stdlib.checkedBigNumberify('./index.rsh:415:111:decimal', stdlib.UInt_max, '0');
                const v7334 = stdlib.safeSub(v7019, v7333);
                const v7335 = stdlib.ge(v2376, v7334);
                if (v7335) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2716,
                    tok: undefined /* Nothing */
                    });
                  const v7340 = 'Push                ';
                  const v7341 = await txn1.getOutput('Player_getOutcome', 'v7340', ctc12, v7340);
                  
                  const v7347 = stdlib.safeSub(v2376, v7334);
                  if (v6816) {
                    await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                    const v7348 = ['None', null];
                    const v7349 = {
                      None: 0,
                      Some: 1
                      }[v7348[0]];
                    const v7350 = stdlib.eq(v7349, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7351 = ['None', null];
                    const v7352 = {
                      None: 0,
                      Some: 1
                      }[v7351[0]];
                    const v7353 = stdlib.eq(v7352, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7354 = v7350 ? v7353 : false;
                    const v7356 = {
                      None: 0,
                      Some: 1
                      }[v6818[0]];
                    const v7357 = stdlib.eq(v7356, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7358 = v7354 ? v7357 : false;
                    const v7360 = {
                      None: 0,
                      Some: 1
                      }[v6824[0]];
                    const v7361 = stdlib.eq(v7360, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7362 = v7358 ? v7361 : false;
                    if (v7362) {
                      await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                      const v7365 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7366 = stdlib.safeMul(v7365, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7367 = stdlib.ge(v7347, v7366);
                      const v25053 = v7347;
                      const v25054 = v2377;
                      const v25055 = v2378;
                      const v25056 = true;
                      if (v7367) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v7376 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7377 = stdlib.safeMul(v7376, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7378 = stdlib.ge(v7347, v7377);
                      const v25059 = v7347;
                      const v25060 = v2377;
                      const v25061 = v2378;
                      const v25062 = true;
                      if (v7378) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}
                  else {
                    await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                    const v7387 = {
                      None: 0,
                      Some: 1
                      }[v6817[0]];
                    const v7388 = stdlib.eq(v7387, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7390 = {
                      None: 0,
                      Some: 1
                      }[v6823[0]];
                    const v7391 = stdlib.eq(v7390, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7392 = v7388 ? v7391 : false;
                    const v7393 = ['None', null];
                    const v7394 = {
                      None: 0,
                      Some: 1
                      }[v7393[0]];
                    const v7395 = stdlib.eq(v7394, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7396 = v7392 ? v7395 : false;
                    const v7397 = ['None', null];
                    const v7398 = {
                      None: 0,
                      Some: 1
                      }[v7397[0]];
                    const v7399 = stdlib.eq(v7398, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7400 = v7396 ? v7399 : false;
                    if (v7400) {
                      await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                      const v7403 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7404 = stdlib.safeMul(v7403, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7405 = stdlib.ge(v7347, v7404);
                      const v25065 = v7347;
                      const v25066 = v2377;
                      const v25067 = v2378;
                      const v25068 = true;
                      if (v7405) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v7414 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7415 = stdlib.safeMul(v7414, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7416 = stdlib.ge(v7347, v7415);
                      const v25071 = v7347;
                      const v25072 = v2377;
                      const v25073 = v2378;
                      const v25074 = true;
                      if (v7416) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}
                else {
                  const v7424 = 'Push                ';
                  const v7425 = await txn1.getOutput('Player_getOutcome', 'v7424', ctc12, v7424);
                  
                  const v7431 = stdlib.safeSub(v2376, v7334);
                  if (v6816) {
                    await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                    const v7432 = ['None', null];
                    const v7433 = {
                      None: 0,
                      Some: 1
                      }[v7432[0]];
                    const v7434 = stdlib.eq(v7433, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7435 = ['None', null];
                    const v7436 = {
                      None: 0,
                      Some: 1
                      }[v7435[0]];
                    const v7437 = stdlib.eq(v7436, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7438 = v7434 ? v7437 : false;
                    const v7440 = {
                      None: 0,
                      Some: 1
                      }[v6818[0]];
                    const v7441 = stdlib.eq(v7440, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7442 = v7438 ? v7441 : false;
                    const v7444 = {
                      None: 0,
                      Some: 1
                      }[v6824[0]];
                    const v7445 = stdlib.eq(v7444, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7446 = v7442 ? v7445 : false;
                    if (v7446) {
                      await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                      const v7449 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7450 = stdlib.safeMul(v7449, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7451 = stdlib.ge(v7431, v7450);
                      const v25077 = v7431;
                      const v25078 = v2377;
                      const v25079 = v2378;
                      const v25080 = true;
                      if (v7451) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v7460 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7461 = stdlib.safeMul(v7460, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7462 = stdlib.ge(v7431, v7461);
                      const v25083 = v7431;
                      const v25084 = v2377;
                      const v25085 = v2378;
                      const v25086 = true;
                      if (v7462) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}
                  else {
                    await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                    await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                    const v7471 = {
                      None: 0,
                      Some: 1
                      }[v6817[0]];
                    const v7472 = stdlib.eq(v7471, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7474 = {
                      None: 0,
                      Some: 1
                      }[v6823[0]];
                    const v7475 = stdlib.eq(v7474, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7476 = v7472 ? v7475 : false;
                    const v7477 = ['None', null];
                    const v7478 = {
                      None: 0,
                      Some: 1
                      }[v7477[0]];
                    const v7479 = stdlib.eq(v7478, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7480 = v7476 ? v7479 : false;
                    const v7481 = ['None', null];
                    const v7482 = {
                      None: 0,
                      Some: 1
                      }[v7481[0]];
                    const v7483 = stdlib.eq(v7482, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                    const v7484 = v7480 ? v7483 : false;
                    if (v7484) {
                      await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                      const v7487 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7488 = stdlib.safeMul(v7487, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7489 = stdlib.ge(v7431, v7488);
                      const v25089 = v7431;
                      const v25090 = v2377;
                      const v25091 = v2378;
                      const v25092 = true;
                      if (v7489) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v7498 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                      const v7499 = stdlib.safeMul(v7498, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                      const v7500 = stdlib.ge(v7431, v7499);
                      const v25095 = v7431;
                      const v25096 = v2377;
                      const v25097 = v2378;
                      const v25098 = true;
                      if (v7500) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v2364,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}}
              else {
                const v7508 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4'));
                if (v7508) {
                  const v7509 = stdlib.safeDiv(v7019, stdlib.checkedBigNumberify('./index.rsh:428:80:decimal', stdlib.UInt_max, '100'));
                  const v7510 = stdlib.safeMul(v7509, stdlib.checkedBigNumberify('./index.rsh:428:87:decimal', stdlib.UInt_max, '250'));
                  const v7511 = stdlib.ge(v2376, v7510);
                  if (v7511) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2716,
                      tok: undefined /* Nothing */
                      });
                    const v7516 = 'Blackjack           ';
                    const v7517 = await txn1.getOutput('Player_getOutcome', 'v7516', ctc12, v7516);
                    
                    const v7523 = stdlib.safeSub(v2376, v7510);
                    if (v6816) {
                      await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7524 = ['None', null];
                      const v7525 = {
                        None: 0,
                        Some: 1
                        }[v7524[0]];
                      const v7526 = stdlib.eq(v7525, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7527 = ['None', null];
                      const v7528 = {
                        None: 0,
                        Some: 1
                        }[v7527[0]];
                      const v7529 = stdlib.eq(v7528, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7530 = v7526 ? v7529 : false;
                      const v7532 = {
                        None: 0,
                        Some: 1
                        }[v6818[0]];
                      const v7533 = stdlib.eq(v7532, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7534 = v7530 ? v7533 : false;
                      const v7536 = {
                        None: 0,
                        Some: 1
                        }[v6824[0]];
                      const v7537 = stdlib.eq(v7536, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7538 = v7534 ? v7537 : false;
                      if (v7538) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7541 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7542 = stdlib.safeMul(v7541, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7543 = stdlib.ge(v7523, v7542);
                        const v25101 = v7523;
                        const v25102 = v2377;
                        const v25103 = v2378;
                        const v25104 = true;
                        if (v7543) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7552 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7553 = stdlib.safeMul(v7552, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7554 = stdlib.ge(v7523, v7553);
                        const v25107 = v7523;
                        const v25108 = v2377;
                        const v25109 = v2378;
                        const v25110 = true;
                        if (v7554) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}
                    else {
                      await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7563 = {
                        None: 0,
                        Some: 1
                        }[v6817[0]];
                      const v7564 = stdlib.eq(v7563, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7566 = {
                        None: 0,
                        Some: 1
                        }[v6823[0]];
                      const v7567 = stdlib.eq(v7566, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7568 = v7564 ? v7567 : false;
                      const v7569 = ['None', null];
                      const v7570 = {
                        None: 0,
                        Some: 1
                        }[v7569[0]];
                      const v7571 = stdlib.eq(v7570, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7572 = v7568 ? v7571 : false;
                      const v7573 = ['None', null];
                      const v7574 = {
                        None: 0,
                        Some: 1
                        }[v7573[0]];
                      const v7575 = stdlib.eq(v7574, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7576 = v7572 ? v7575 : false;
                      if (v7576) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7579 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7580 = stdlib.safeMul(v7579, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7581 = stdlib.ge(v7523, v7580);
                        const v25113 = v7523;
                        const v25114 = v2377;
                        const v25115 = v2378;
                        const v25116 = true;
                        if (v7581) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7590 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7591 = stdlib.safeMul(v7590, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7592 = stdlib.ge(v7523, v7591);
                        const v25119 = v7523;
                        const v25120 = v2377;
                        const v25121 = v2378;
                        const v25122 = true;
                        if (v7592) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}
                  else {
                    const v7600 = 'Blackjack           ';
                    const v7601 = await txn1.getOutput('Player_getOutcome', 'v7600', ctc12, v7600);
                    
                    const v7607 = stdlib.safeSub(v2376, v7510);
                    if (v6816) {
                      await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7608 = ['None', null];
                      const v7609 = {
                        None: 0,
                        Some: 1
                        }[v7608[0]];
                      const v7610 = stdlib.eq(v7609, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7611 = ['None', null];
                      const v7612 = {
                        None: 0,
                        Some: 1
                        }[v7611[0]];
                      const v7613 = stdlib.eq(v7612, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7614 = v7610 ? v7613 : false;
                      const v7616 = {
                        None: 0,
                        Some: 1
                        }[v6818[0]];
                      const v7617 = stdlib.eq(v7616, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7618 = v7614 ? v7617 : false;
                      const v7620 = {
                        None: 0,
                        Some: 1
                        }[v6824[0]];
                      const v7621 = stdlib.eq(v7620, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7622 = v7618 ? v7621 : false;
                      if (v7622) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7625 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7626 = stdlib.safeMul(v7625, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7627 = stdlib.ge(v7607, v7626);
                        const v25125 = v7607;
                        const v25126 = v2377;
                        const v25127 = v2378;
                        const v25128 = true;
                        if (v7627) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7636 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7637 = stdlib.safeMul(v7636, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7638 = stdlib.ge(v7607, v7637);
                        const v25131 = v7607;
                        const v25132 = v2377;
                        const v25133 = v2378;
                        const v25134 = true;
                        if (v7638) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}
                    else {
                      await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7647 = {
                        None: 0,
                        Some: 1
                        }[v6817[0]];
                      const v7648 = stdlib.eq(v7647, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7650 = {
                        None: 0,
                        Some: 1
                        }[v6823[0]];
                      const v7651 = stdlib.eq(v7650, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7652 = v7648 ? v7651 : false;
                      const v7653 = ['None', null];
                      const v7654 = {
                        None: 0,
                        Some: 1
                        }[v7653[0]];
                      const v7655 = stdlib.eq(v7654, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7656 = v7652 ? v7655 : false;
                      const v7657 = ['None', null];
                      const v7658 = {
                        None: 0,
                        Some: 1
                        }[v7657[0]];
                      const v7659 = stdlib.eq(v7658, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7660 = v7656 ? v7659 : false;
                      if (v7660) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7663 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7664 = stdlib.safeMul(v7663, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7665 = stdlib.ge(v7607, v7664);
                        const v25137 = v7607;
                        const v25138 = v2377;
                        const v25139 = v2378;
                        const v25140 = true;
                        if (v7665) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7674 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7675 = stdlib.safeMul(v7674, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7676 = stdlib.ge(v7607, v7675);
                        const v25143 = v7607;
                        const v25144 = v2377;
                        const v25145 = v2378;
                        const v25146 = true;
                        if (v7676) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}}
                else {
                  const v7684 = stdlib.ge(v2376, v7019);
                  if (v7684) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v2716,
                      tok: undefined /* Nothing */
                      });
                    const v7689 = 'Retrieve            ';
                    const v7690 = await txn1.getOutput('Player_getOutcome', 'v7689', ctc12, v7689);
                    
                    const v7696 = stdlib.safeSub(v2376, v7019);
                    if (v6816) {
                      await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7697 = ['None', null];
                      const v7698 = {
                        None: 0,
                        Some: 1
                        }[v7697[0]];
                      const v7699 = stdlib.eq(v7698, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7700 = ['None', null];
                      const v7701 = {
                        None: 0,
                        Some: 1
                        }[v7700[0]];
                      const v7702 = stdlib.eq(v7701, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7703 = v7699 ? v7702 : false;
                      const v7705 = {
                        None: 0,
                        Some: 1
                        }[v6818[0]];
                      const v7706 = stdlib.eq(v7705, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7707 = v7703 ? v7706 : false;
                      const v7709 = {
                        None: 0,
                        Some: 1
                        }[v6824[0]];
                      const v7710 = stdlib.eq(v7709, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7711 = v7707 ? v7710 : false;
                      if (v7711) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7714 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7715 = stdlib.safeMul(v7714, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7716 = stdlib.ge(v7696, v7715);
                        const v25149 = v7696;
                        const v25150 = v2377;
                        const v25151 = v2378;
                        const v25152 = true;
                        if (v7716) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7725 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7726 = stdlib.safeMul(v7725, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7727 = stdlib.ge(v7696, v7726);
                        const v25155 = v7696;
                        const v25156 = v2377;
                        const v25157 = v2378;
                        const v25158 = true;
                        if (v7727) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}
                    else {
                      await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7736 = {
                        None: 0,
                        Some: 1
                        }[v6817[0]];
                      const v7737 = stdlib.eq(v7736, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7739 = {
                        None: 0,
                        Some: 1
                        }[v6823[0]];
                      const v7740 = stdlib.eq(v7739, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7741 = v7737 ? v7740 : false;
                      const v7742 = ['None', null];
                      const v7743 = {
                        None: 0,
                        Some: 1
                        }[v7742[0]];
                      const v7744 = stdlib.eq(v7743, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7745 = v7741 ? v7744 : false;
                      const v7746 = ['None', null];
                      const v7747 = {
                        None: 0,
                        Some: 1
                        }[v7746[0]];
                      const v7748 = stdlib.eq(v7747, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7749 = v7745 ? v7748 : false;
                      if (v7749) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7752 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7753 = stdlib.safeMul(v7752, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7754 = stdlib.ge(v7696, v7753);
                        const v25161 = v7696;
                        const v25162 = v2377;
                        const v25163 = v2378;
                        const v25164 = true;
                        if (v7754) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7763 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7764 = stdlib.safeMul(v7763, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7765 = stdlib.ge(v7696, v7764);
                        const v25167 = v7696;
                        const v25168 = v2377;
                        const v25169 = v2378;
                        const v25170 = true;
                        if (v7765) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}
                  else {
                    const v7773 = 'Retrieve            ';
                    const v7774 = await txn1.getOutput('Player_getOutcome', 'v7773', ctc12, v7773);
                    
                    const v7780 = stdlib.safeSub(v2376, v7019);
                    if (v6816) {
                      await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7781 = ['None', null];
                      const v7782 = {
                        None: 0,
                        Some: 1
                        }[v7781[0]];
                      const v7783 = stdlib.eq(v7782, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7784 = ['None', null];
                      const v7785 = {
                        None: 0,
                        Some: 1
                        }[v7784[0]];
                      const v7786 = stdlib.eq(v7785, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7787 = v7783 ? v7786 : false;
                      const v7789 = {
                        None: 0,
                        Some: 1
                        }[v6818[0]];
                      const v7790 = stdlib.eq(v7789, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7791 = v7787 ? v7790 : false;
                      const v7793 = {
                        None: 0,
                        Some: 1
                        }[v6824[0]];
                      const v7794 = stdlib.eq(v7793, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7795 = v7791 ? v7794 : false;
                      if (v7795) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7798 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7799 = stdlib.safeMul(v7798, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7800 = stdlib.ge(v7780, v7799);
                        const v25173 = v7780;
                        const v25174 = v2377;
                        const v25175 = v2378;
                        const v25176 = true;
                        if (v7800) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7809 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7810 = stdlib.safeMul(v7809, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7811 = stdlib.ge(v7780, v7810);
                        const v25179 = v7780;
                        const v25180 = v2377;
                        const v25181 = v2378;
                        const v25182 = true;
                        if (v7811) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}
                    else {
                      await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
                      await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
                      const v7820 = {
                        None: 0,
                        Some: 1
                        }[v6817[0]];
                      const v7821 = stdlib.eq(v7820, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7823 = {
                        None: 0,
                        Some: 1
                        }[v6823[0]];
                      const v7824 = stdlib.eq(v7823, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7825 = v7821 ? v7824 : false;
                      const v7826 = ['None', null];
                      const v7827 = {
                        None: 0,
                        Some: 1
                        }[v7826[0]];
                      const v7828 = stdlib.eq(v7827, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7829 = v7825 ? v7828 : false;
                      const v7830 = ['None', null];
                      const v7831 = {
                        None: 0,
                        Some: 1
                        }[v7830[0]];
                      const v7832 = stdlib.eq(v7831, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                      const v7833 = v7829 ? v7832 : false;
                      if (v7833) {
                        await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                        const v7836 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7837 = stdlib.safeMul(v7836, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7838 = stdlib.ge(v7780, v7837);
                        const v25185 = v7780;
                        const v25186 = v2377;
                        const v25187 = v2378;
                        const v25188 = true;
                        if (v7838) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v7847 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                        const v7848 = stdlib.safeMul(v7847, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                        const v7849 = stdlib.ge(v7780, v7848);
                        const v25191 = v7780;
                        const v25192 = v2377;
                        const v25193 = v2378;
                        const v25194 = true;
                        if (v7849) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v2364,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}}}}}
          break;
          }
        case 'Player_placeBet0_113': {
          const v8104 = v2717[1];
          
          break;
          }
        case 'Player_submitHand0_113': {
          const v9450 = v2717[1];
          
          break;
          }
        case 'Player_surrender0_113': {
          const v10796 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Dealer_submitHand0_113': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Player_buyInsurance0_113': {
      const v4066 = v2717[1];
      return;
      break;
      }
    case 'Player_doubleDown0_113': {
      const v5412 = v2717[1];
      return;
      break;
      }
    case 'Player_getOutcome0_113': {
      const v6758 = v2717[1];
      undefined /* setApiDetails */;
      const v6816 = v6758[stdlib.checkedBigNumberify('./index.rsh:358:22:spread', stdlib.UInt_max, '0')];
      const v6817 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2716, ctc2), null);
      const v6818 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2716, ctc2), null);
      const v6819 = v6816 ? v6817 : v6818;
      const v6823 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2716, ctc5), null);
      const v6824 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2716, ctc5), null);
      const v6825 = v6816 ? v6823 : v6824;
      let v6826;
      switch (v6825[0]) {
        case 'None': {
          const v6827 = v6825[1];
          const v6828 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          v6826 = v6828;
          
          break;
          }
        case 'Some': {
          const v6830 = v6825[1];
          v6826 = v6830;
          
          break;
          }
        }
      const v6831 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2716, ctc0), null);
      const v6832 = {
        None: 0,
        Some: 1
        }[v6831[0]];
      const v6833 = stdlib.eq(v6832, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6833, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:365:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You did not place a bet on this game',
        who: 'Player_getOutcome'
        });
      stdlib.assert(v2379, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:366:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'The Dealer is yet to submit his hand',
        who: 'Player_getOutcome'
        });
      const v6836 = v6826.cardCount;
      const v6837 = stdlib.gt(v6836, stdlib.checkedBigNumberify('./index.rsh:368:56:decimal', stdlib.UInt_max, '0'));
      const v6838 = v6826.cardValue;
      const v6839 = stdlib.gt(v6838, stdlib.checkedBigNumberify('./index.rsh:368:84:decimal', stdlib.UInt_max, '0'));
      const v6840 = v6837 ? v6839 : false;
      stdlib.assert(v6840, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:358:56:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:358:56:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'Invalid submission',
        who: 'Player_getOutcome'
        });
      ;
      let v7019;
      switch (v6819[0]) {
        case 'None': {
          const v7020 = v6819[1];
          v7019 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v7021 = v6819[1];
          v7019 = v7021;
          
          break;
          }
        }
      let v7025;
      switch (v6825[0]) {
        case 'None': {
          const v7026 = v6825[1];
          const v7027 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          v7025 = v7027;
          
          break;
          }
        case 'Some': {
          const v7029 = v6825[1];
          v7025 = v7029;
          
          break;
          }
        }
      const v7035 = v7025.cardCount;
      const v7036 = stdlib.gt(v7035, stdlib.checkedBigNumberify('./index.rsh:368:56:decimal', stdlib.UInt_max, '0'));
      const v7037 = v7025.cardValue;
      const v7038 = stdlib.gt(v7037, stdlib.checkedBigNumberify('./index.rsh:368:84:decimal', stdlib.UInt_max, '0'));
      const v7039 = v7036 ? v7038 : false;
      stdlib.assert(v7039, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:367:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
        msg: 'Invalid submission',
        who: 'Player_getOutcome'
        });
      const v7044 = v7025.boughtInsurance;
      const v7045 = v7025.surrendered;
      const v7047 = stdlib.eq(v2378, stdlib.checkedBigNumberify('./index.rsh:34:27:decimal', stdlib.UInt_max, '21'));
      const v7048 = stdlib.eq(v2377, stdlib.checkedBigNumberify('./index.rsh:35:55:decimal', stdlib.UInt_max, '2'));
      const v7049 = v7044 ? v7048 : false;
      const v7051 = v7045 ? v7048 : false;
      const v7052 = stdlib.eq(v7037, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
      const v12161 = v7052 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v12162 = v7051 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '5') : v12161;
      const v12163 = v7049 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3') : v12162;
      const v7053 = stdlib.gt(v2378, stdlib.checkedBigNumberify('./index.rsh:46:33:decimal', stdlib.UInt_max, '21'));
      const v7054 = stdlib.lt(v7037, stdlib.checkedBigNumberify('./index.rsh:47:33:decimal', stdlib.UInt_max, '22'));
      const v7056 = stdlib.eq(v7035, stdlib.checkedBigNumberify('./index.rsh:48:61:decimal', stdlib.UInt_max, '2'));
      const v7057 = v7052 ? v7056 : false;
      const v12164 = v7057 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v12165 = v7054 ? v12164 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v7058 = stdlib.lt(v2378, stdlib.checkedBigNumberify('./index.rsh:56:33:decimal', stdlib.UInt_max, '21'));
      const v7059 = stdlib.gt(v2378, v7037);
      const v7060 = stdlib.gt(v7037, v2378);
      const v12166 = v7054 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v12167 = v7057 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4') : v12166;
      const v7065 = stdlib.eq(v7037, v2378);
      const v12168 = v7065 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v12169 = v7060 ? v12167 : v12168;
      const v12170 = v7059 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v12169;
      const v12171 = v7058 ? v12170 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v12172 = v7053 ? v12165 : v12171;
      const v12173 = v7045 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v12172;
      const v7046 = v7047 ? v12163 : v12173;
      const v7066 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v7066) {
        const v7068 = v7044 ? v2366 : stdlib.checkedBigNumberify('./index.rsh:386:111:decimal', stdlib.UInt_max, '0');
        const v7069 = stdlib.safeSub(v7019, v7068);
        const v7070 = stdlib.safeMul(v7069, stdlib.checkedBigNumberify('./index.rsh:387:69:decimal', stdlib.UInt_max, '2'));
        const v7071 = stdlib.ge(v2376, v7070);
        if (v7071) {
          ;
          const v7077 = 'Player Wins         ';
          const v7078 = await txn1.getOutput('Player_getOutcome', 'v7077', ctc12, v7077);
          if (v1590) {
            stdlib.protect(ctc0, await interact.out(v6758, v7078), {
              at: './index.rsh:358:23:application',
              fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:388:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
              msg: 'out',
              who: 'Player_getOutcome'
              });
            }
          else {
            }
          
          const v7085 = stdlib.safeSub(v2376, v7070);
          if (v6816) {
            await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
            const v7086 = ['None', null];
            const v7087 = {
              None: 0,
              Some: 1
              }[v7086[0]];
            const v7088 = stdlib.eq(v7087, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7089 = ['None', null];
            const v7090 = {
              None: 0,
              Some: 1
              }[v7089[0]];
            const v7091 = stdlib.eq(v7090, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7092 = v7088 ? v7091 : false;
            const v7094 = {
              None: 0,
              Some: 1
              }[v6818[0]];
            const v7095 = stdlib.eq(v7094, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7096 = v7092 ? v7095 : false;
            const v7098 = {
              None: 0,
              Some: 1
              }[v6824[0]];
            const v7099 = stdlib.eq(v7098, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7100 = v7096 ? v7099 : false;
            if (v7100) {
              await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
              const v7103 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7104 = stdlib.safeMul(v7103, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7105 = stdlib.ge(v7085, v7104);
              const v24981 = v7085;
              const v24982 = v2377;
              const v24983 = v2378;
              const v24984 = true;
              if (v7105) {
                return;
                }
              else {
                ;
                return;
                }}
            else {
              const v7114 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7115 = stdlib.safeMul(v7114, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7116 = stdlib.ge(v7085, v7115);
              const v24987 = v7085;
              const v24988 = v2377;
              const v24989 = v2378;
              const v24990 = true;
              if (v7116) {
                return;
                }
              else {
                ;
                return;
                }}}
          else {
            await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
            const v7125 = {
              None: 0,
              Some: 1
              }[v6817[0]];
            const v7126 = stdlib.eq(v7125, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7128 = {
              None: 0,
              Some: 1
              }[v6823[0]];
            const v7129 = stdlib.eq(v7128, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7130 = v7126 ? v7129 : false;
            const v7131 = ['None', null];
            const v7132 = {
              None: 0,
              Some: 1
              }[v7131[0]];
            const v7133 = stdlib.eq(v7132, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7134 = v7130 ? v7133 : false;
            const v7135 = ['None', null];
            const v7136 = {
              None: 0,
              Some: 1
              }[v7135[0]];
            const v7137 = stdlib.eq(v7136, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7138 = v7134 ? v7137 : false;
            if (v7138) {
              await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
              const v7141 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7142 = stdlib.safeMul(v7141, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7143 = stdlib.ge(v7085, v7142);
              const v24993 = v7085;
              const v24994 = v2377;
              const v24995 = v2378;
              const v24996 = true;
              if (v7143) {
                return;
                }
              else {
                ;
                return;
                }}
            else {
              const v7152 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7153 = stdlib.safeMul(v7152, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7154 = stdlib.ge(v7085, v7153);
              const v24999 = v7085;
              const v25000 = v2377;
              const v25001 = v2378;
              const v25002 = true;
              if (v7154) {
                return;
                }
              else {
                ;
                return;
                }}}}
        else {
          const v7162 = 'Player Wins         ';
          const v7163 = await txn1.getOutput('Player_getOutcome', 'v7162', ctc12, v7162);
          if (v1590) {
            stdlib.protect(ctc0, await interact.out(v6758, v7163), {
              at: './index.rsh:358:23:application',
              fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:388:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
              msg: 'out',
              who: 'Player_getOutcome'
              });
            }
          else {
            }
          
          const v7170 = stdlib.safeSub(v2376, v7070);
          if (v6816) {
            await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
            const v7171 = ['None', null];
            const v7172 = {
              None: 0,
              Some: 1
              }[v7171[0]];
            const v7173 = stdlib.eq(v7172, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7174 = ['None', null];
            const v7175 = {
              None: 0,
              Some: 1
              }[v7174[0]];
            const v7176 = stdlib.eq(v7175, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7177 = v7173 ? v7176 : false;
            const v7179 = {
              None: 0,
              Some: 1
              }[v6818[0]];
            const v7180 = stdlib.eq(v7179, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7181 = v7177 ? v7180 : false;
            const v7183 = {
              None: 0,
              Some: 1
              }[v6824[0]];
            const v7184 = stdlib.eq(v7183, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7185 = v7181 ? v7184 : false;
            if (v7185) {
              await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
              const v7188 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7189 = stdlib.safeMul(v7188, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7190 = stdlib.ge(v7170, v7189);
              const v25005 = v7170;
              const v25006 = v2377;
              const v25007 = v2378;
              const v25008 = true;
              if (v7190) {
                return;
                }
              else {
                ;
                return;
                }}
            else {
              const v7199 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7200 = stdlib.safeMul(v7199, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7201 = stdlib.ge(v7170, v7200);
              const v25011 = v7170;
              const v25012 = v2377;
              const v25013 = v2378;
              const v25014 = true;
              if (v7201) {
                return;
                }
              else {
                ;
                return;
                }}}
          else {
            await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
            const v7210 = {
              None: 0,
              Some: 1
              }[v6817[0]];
            const v7211 = stdlib.eq(v7210, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7213 = {
              None: 0,
              Some: 1
              }[v6823[0]];
            const v7214 = stdlib.eq(v7213, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7215 = v7211 ? v7214 : false;
            const v7216 = ['None', null];
            const v7217 = {
              None: 0,
              Some: 1
              }[v7216[0]];
            const v7218 = stdlib.eq(v7217, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7219 = v7215 ? v7218 : false;
            const v7220 = ['None', null];
            const v7221 = {
              None: 0,
              Some: 1
              }[v7220[0]];
            const v7222 = stdlib.eq(v7221, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7223 = v7219 ? v7222 : false;
            if (v7223) {
              await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
              const v7226 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7227 = stdlib.safeMul(v7226, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7228 = stdlib.ge(v7170, v7227);
              const v25017 = v7170;
              const v25018 = v2377;
              const v25019 = v2378;
              const v25020 = true;
              if (v7228) {
                return;
                }
              else {
                ;
                return;
                }}
            else {
              const v7237 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7238 = stdlib.safeMul(v7237, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7239 = stdlib.ge(v7170, v7238);
              const v25023 = v7170;
              const v25024 = v2377;
              const v25025 = v2378;
              const v25026 = true;
              if (v7239) {
                return;
                }
              else {
                ;
                return;
                }}}}}
      else {
        const v7247 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v7247) {
          const v7248 = 'Dealer Wins         ';
          const v7249 = await txn1.getOutput('Player_getOutcome', 'v7248', ctc12, v7248);
          if (v1590) {
            stdlib.protect(ctc0, await interact.out(v6758, v7249), {
              at: './index.rsh:358:23:application',
              fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:402:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
              msg: 'out',
              who: 'Player_getOutcome'
              });
            }
          else {
            }
          
          if (v6816) {
            await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
            const v7255 = ['None', null];
            const v7256 = {
              None: 0,
              Some: 1
              }[v7255[0]];
            const v7257 = stdlib.eq(v7256, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7258 = ['None', null];
            const v7259 = {
              None: 0,
              Some: 1
              }[v7258[0]];
            const v7260 = stdlib.eq(v7259, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7261 = v7257 ? v7260 : false;
            const v7263 = {
              None: 0,
              Some: 1
              }[v6818[0]];
            const v7264 = stdlib.eq(v7263, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7265 = v7261 ? v7264 : false;
            const v7267 = {
              None: 0,
              Some: 1
              }[v6824[0]];
            const v7268 = stdlib.eq(v7267, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7269 = v7265 ? v7268 : false;
            if (v7269) {
              await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
              const v7272 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7273 = stdlib.safeMul(v7272, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7274 = stdlib.ge(v2376, v7273);
              const v25029 = v2376;
              const v25030 = v2377;
              const v25031 = v2378;
              const v25032 = true;
              if (v7274) {
                return;
                }
              else {
                ;
                return;
                }}
            else {
              const v7283 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7284 = stdlib.safeMul(v7283, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7285 = stdlib.ge(v2376, v7284);
              const v25035 = v2376;
              const v25036 = v2377;
              const v25037 = v2378;
              const v25038 = true;
              if (v7285) {
                return;
                }
              else {
                ;
                return;
                }}}
          else {
            await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
            await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
            const v7294 = {
              None: 0,
              Some: 1
              }[v6817[0]];
            const v7295 = stdlib.eq(v7294, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7297 = {
              None: 0,
              Some: 1
              }[v6823[0]];
            const v7298 = stdlib.eq(v7297, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7299 = v7295 ? v7298 : false;
            const v7300 = ['None', null];
            const v7301 = {
              None: 0,
              Some: 1
              }[v7300[0]];
            const v7302 = stdlib.eq(v7301, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7303 = v7299 ? v7302 : false;
            const v7304 = ['None', null];
            const v7305 = {
              None: 0,
              Some: 1
              }[v7304[0]];
            const v7306 = stdlib.eq(v7305, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v7307 = v7303 ? v7306 : false;
            if (v7307) {
              await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
              const v7310 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7311 = stdlib.safeMul(v7310, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7312 = stdlib.ge(v2376, v7311);
              const v25041 = v2376;
              const v25042 = v2377;
              const v25043 = v2378;
              const v25044 = true;
              if (v7312) {
                return;
                }
              else {
                ;
                return;
                }}
            else {
              const v7321 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
              const v7322 = stdlib.safeMul(v7321, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
              const v7323 = stdlib.ge(v2376, v7322);
              const v25047 = v2376;
              const v25048 = v2377;
              const v25049 = v2378;
              const v25050 = true;
              if (v7323) {
                return;
                }
              else {
                ;
                return;
                }}}}
        else {
          const v7331 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v7331) {
            const v7333 = v7044 ? v2366 : stdlib.checkedBigNumberify('./index.rsh:415:111:decimal', stdlib.UInt_max, '0');
            const v7334 = stdlib.safeSub(v7019, v7333);
            const v7335 = stdlib.ge(v2376, v7334);
            if (v7335) {
              ;
              const v7340 = 'Push                ';
              const v7341 = await txn1.getOutput('Player_getOutcome', 'v7340', ctc12, v7340);
              if (v1590) {
                stdlib.protect(ctc0, await interact.out(v6758, v7341), {
                  at: './index.rsh:358:23:application',
                  fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:417:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
                  msg: 'out',
                  who: 'Player_getOutcome'
                  });
                }
              else {
                }
              
              const v7347 = stdlib.safeSub(v2376, v7334);
              if (v6816) {
                await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7348 = ['None', null];
                const v7349 = {
                  None: 0,
                  Some: 1
                  }[v7348[0]];
                const v7350 = stdlib.eq(v7349, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7351 = ['None', null];
                const v7352 = {
                  None: 0,
                  Some: 1
                  }[v7351[0]];
                const v7353 = stdlib.eq(v7352, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7354 = v7350 ? v7353 : false;
                const v7356 = {
                  None: 0,
                  Some: 1
                  }[v6818[0]];
                const v7357 = stdlib.eq(v7356, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7358 = v7354 ? v7357 : false;
                const v7360 = {
                  None: 0,
                  Some: 1
                  }[v6824[0]];
                const v7361 = stdlib.eq(v7360, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7362 = v7358 ? v7361 : false;
                if (v7362) {
                  await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7365 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7366 = stdlib.safeMul(v7365, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7367 = stdlib.ge(v7347, v7366);
                  const v25053 = v7347;
                  const v25054 = v2377;
                  const v25055 = v2378;
                  const v25056 = true;
                  if (v7367) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}
                else {
                  const v7376 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7377 = stdlib.safeMul(v7376, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7378 = stdlib.ge(v7347, v7377);
                  const v25059 = v7347;
                  const v25060 = v2377;
                  const v25061 = v2378;
                  const v25062 = true;
                  if (v7378) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}}
              else {
                await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7387 = {
                  None: 0,
                  Some: 1
                  }[v6817[0]];
                const v7388 = stdlib.eq(v7387, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7390 = {
                  None: 0,
                  Some: 1
                  }[v6823[0]];
                const v7391 = stdlib.eq(v7390, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7392 = v7388 ? v7391 : false;
                const v7393 = ['None', null];
                const v7394 = {
                  None: 0,
                  Some: 1
                  }[v7393[0]];
                const v7395 = stdlib.eq(v7394, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7396 = v7392 ? v7395 : false;
                const v7397 = ['None', null];
                const v7398 = {
                  None: 0,
                  Some: 1
                  }[v7397[0]];
                const v7399 = stdlib.eq(v7398, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7400 = v7396 ? v7399 : false;
                if (v7400) {
                  await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7403 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7404 = stdlib.safeMul(v7403, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7405 = stdlib.ge(v7347, v7404);
                  const v25065 = v7347;
                  const v25066 = v2377;
                  const v25067 = v2378;
                  const v25068 = true;
                  if (v7405) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}
                else {
                  const v7414 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7415 = stdlib.safeMul(v7414, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7416 = stdlib.ge(v7347, v7415);
                  const v25071 = v7347;
                  const v25072 = v2377;
                  const v25073 = v2378;
                  const v25074 = true;
                  if (v7416) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}}}
            else {
              const v7424 = 'Push                ';
              const v7425 = await txn1.getOutput('Player_getOutcome', 'v7424', ctc12, v7424);
              if (v1590) {
                stdlib.protect(ctc0, await interact.out(v6758, v7425), {
                  at: './index.rsh:358:23:application',
                  fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:417:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
                  msg: 'out',
                  who: 'Player_getOutcome'
                  });
                }
              else {
                }
              
              const v7431 = stdlib.safeSub(v2376, v7334);
              if (v6816) {
                await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7432 = ['None', null];
                const v7433 = {
                  None: 0,
                  Some: 1
                  }[v7432[0]];
                const v7434 = stdlib.eq(v7433, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7435 = ['None', null];
                const v7436 = {
                  None: 0,
                  Some: 1
                  }[v7435[0]];
                const v7437 = stdlib.eq(v7436, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7438 = v7434 ? v7437 : false;
                const v7440 = {
                  None: 0,
                  Some: 1
                  }[v6818[0]];
                const v7441 = stdlib.eq(v7440, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7442 = v7438 ? v7441 : false;
                const v7444 = {
                  None: 0,
                  Some: 1
                  }[v6824[0]];
                const v7445 = stdlib.eq(v7444, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7446 = v7442 ? v7445 : false;
                if (v7446) {
                  await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7449 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7450 = stdlib.safeMul(v7449, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7451 = stdlib.ge(v7431, v7450);
                  const v25077 = v7431;
                  const v25078 = v2377;
                  const v25079 = v2378;
                  const v25080 = true;
                  if (v7451) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}
                else {
                  const v7460 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7461 = stdlib.safeMul(v7460, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7462 = stdlib.ge(v7431, v7461);
                  const v25083 = v7431;
                  const v25084 = v2377;
                  const v25085 = v2378;
                  const v25086 = true;
                  if (v7462) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}}
              else {
                await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
                await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
                const v7471 = {
                  None: 0,
                  Some: 1
                  }[v6817[0]];
                const v7472 = stdlib.eq(v7471, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7474 = {
                  None: 0,
                  Some: 1
                  }[v6823[0]];
                const v7475 = stdlib.eq(v7474, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7476 = v7472 ? v7475 : false;
                const v7477 = ['None', null];
                const v7478 = {
                  None: 0,
                  Some: 1
                  }[v7477[0]];
                const v7479 = stdlib.eq(v7478, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7480 = v7476 ? v7479 : false;
                const v7481 = ['None', null];
                const v7482 = {
                  None: 0,
                  Some: 1
                  }[v7481[0]];
                const v7483 = stdlib.eq(v7482, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                const v7484 = v7480 ? v7483 : false;
                if (v7484) {
                  await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                  const v7487 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7488 = stdlib.safeMul(v7487, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7489 = stdlib.ge(v7431, v7488);
                  const v25089 = v7431;
                  const v25090 = v2377;
                  const v25091 = v2378;
                  const v25092 = true;
                  if (v7489) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}
                else {
                  const v7498 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                  const v7499 = stdlib.safeMul(v7498, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                  const v7500 = stdlib.ge(v7431, v7499);
                  const v25095 = v7431;
                  const v25096 = v2377;
                  const v25097 = v2378;
                  const v25098 = true;
                  if (v7500) {
                    return;
                    }
                  else {
                    ;
                    return;
                    }}}}}
          else {
            const v7508 = stdlib.eq(v7046, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4'));
            if (v7508) {
              const v7509 = stdlib.safeDiv(v7019, stdlib.checkedBigNumberify('./index.rsh:428:80:decimal', stdlib.UInt_max, '100'));
              const v7510 = stdlib.safeMul(v7509, stdlib.checkedBigNumberify('./index.rsh:428:87:decimal', stdlib.UInt_max, '250'));
              const v7511 = stdlib.ge(v2376, v7510);
              if (v7511) {
                ;
                const v7516 = 'Blackjack           ';
                const v7517 = await txn1.getOutput('Player_getOutcome', 'v7516', ctc12, v7516);
                if (v1590) {
                  stdlib.protect(ctc0, await interact.out(v6758, v7517), {
                    at: './index.rsh:358:23:application',
                    fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:430:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
                    msg: 'out',
                    who: 'Player_getOutcome'
                    });
                  }
                else {
                  }
                
                const v7523 = stdlib.safeSub(v2376, v7510);
                if (v6816) {
                  await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7524 = ['None', null];
                  const v7525 = {
                    None: 0,
                    Some: 1
                    }[v7524[0]];
                  const v7526 = stdlib.eq(v7525, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7527 = ['None', null];
                  const v7528 = {
                    None: 0,
                    Some: 1
                    }[v7527[0]];
                  const v7529 = stdlib.eq(v7528, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7530 = v7526 ? v7529 : false;
                  const v7532 = {
                    None: 0,
                    Some: 1
                    }[v6818[0]];
                  const v7533 = stdlib.eq(v7532, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7534 = v7530 ? v7533 : false;
                  const v7536 = {
                    None: 0,
                    Some: 1
                    }[v6824[0]];
                  const v7537 = stdlib.eq(v7536, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7538 = v7534 ? v7537 : false;
                  if (v7538) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7541 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7542 = stdlib.safeMul(v7541, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7543 = stdlib.ge(v7523, v7542);
                    const v25101 = v7523;
                    const v25102 = v2377;
                    const v25103 = v2378;
                    const v25104 = true;
                    if (v7543) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7552 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7553 = stdlib.safeMul(v7552, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7554 = stdlib.ge(v7523, v7553);
                    const v25107 = v7523;
                    const v25108 = v2377;
                    const v25109 = v2378;
                    const v25110 = true;
                    if (v7554) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}
                else {
                  await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7563 = {
                    None: 0,
                    Some: 1
                    }[v6817[0]];
                  const v7564 = stdlib.eq(v7563, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7566 = {
                    None: 0,
                    Some: 1
                    }[v6823[0]];
                  const v7567 = stdlib.eq(v7566, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7568 = v7564 ? v7567 : false;
                  const v7569 = ['None', null];
                  const v7570 = {
                    None: 0,
                    Some: 1
                    }[v7569[0]];
                  const v7571 = stdlib.eq(v7570, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7572 = v7568 ? v7571 : false;
                  const v7573 = ['None', null];
                  const v7574 = {
                    None: 0,
                    Some: 1
                    }[v7573[0]];
                  const v7575 = stdlib.eq(v7574, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7576 = v7572 ? v7575 : false;
                  if (v7576) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7579 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7580 = stdlib.safeMul(v7579, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7581 = stdlib.ge(v7523, v7580);
                    const v25113 = v7523;
                    const v25114 = v2377;
                    const v25115 = v2378;
                    const v25116 = true;
                    if (v7581) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7590 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7591 = stdlib.safeMul(v7590, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7592 = stdlib.ge(v7523, v7591);
                    const v25119 = v7523;
                    const v25120 = v2377;
                    const v25121 = v2378;
                    const v25122 = true;
                    if (v7592) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}}
              else {
                const v7600 = 'Blackjack           ';
                const v7601 = await txn1.getOutput('Player_getOutcome', 'v7600', ctc12, v7600);
                if (v1590) {
                  stdlib.protect(ctc0, await interact.out(v6758, v7601), {
                    at: './index.rsh:358:23:application',
                    fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:430:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
                    msg: 'out',
                    who: 'Player_getOutcome'
                    });
                  }
                else {
                  }
                
                const v7607 = stdlib.safeSub(v2376, v7510);
                if (v6816) {
                  await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7608 = ['None', null];
                  const v7609 = {
                    None: 0,
                    Some: 1
                    }[v7608[0]];
                  const v7610 = stdlib.eq(v7609, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7611 = ['None', null];
                  const v7612 = {
                    None: 0,
                    Some: 1
                    }[v7611[0]];
                  const v7613 = stdlib.eq(v7612, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7614 = v7610 ? v7613 : false;
                  const v7616 = {
                    None: 0,
                    Some: 1
                    }[v6818[0]];
                  const v7617 = stdlib.eq(v7616, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7618 = v7614 ? v7617 : false;
                  const v7620 = {
                    None: 0,
                    Some: 1
                    }[v6824[0]];
                  const v7621 = stdlib.eq(v7620, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7622 = v7618 ? v7621 : false;
                  if (v7622) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7625 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7626 = stdlib.safeMul(v7625, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7627 = stdlib.ge(v7607, v7626);
                    const v25125 = v7607;
                    const v25126 = v2377;
                    const v25127 = v2378;
                    const v25128 = true;
                    if (v7627) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7636 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7637 = stdlib.safeMul(v7636, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7638 = stdlib.ge(v7607, v7637);
                    const v25131 = v7607;
                    const v25132 = v2377;
                    const v25133 = v2378;
                    const v25134 = true;
                    if (v7638) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}
                else {
                  await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7647 = {
                    None: 0,
                    Some: 1
                    }[v6817[0]];
                  const v7648 = stdlib.eq(v7647, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7650 = {
                    None: 0,
                    Some: 1
                    }[v6823[0]];
                  const v7651 = stdlib.eq(v7650, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7652 = v7648 ? v7651 : false;
                  const v7653 = ['None', null];
                  const v7654 = {
                    None: 0,
                    Some: 1
                    }[v7653[0]];
                  const v7655 = stdlib.eq(v7654, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7656 = v7652 ? v7655 : false;
                  const v7657 = ['None', null];
                  const v7658 = {
                    None: 0,
                    Some: 1
                    }[v7657[0]];
                  const v7659 = stdlib.eq(v7658, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7660 = v7656 ? v7659 : false;
                  if (v7660) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7663 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7664 = stdlib.safeMul(v7663, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7665 = stdlib.ge(v7607, v7664);
                    const v25137 = v7607;
                    const v25138 = v2377;
                    const v25139 = v2378;
                    const v25140 = true;
                    if (v7665) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7674 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7675 = stdlib.safeMul(v7674, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7676 = stdlib.ge(v7607, v7675);
                    const v25143 = v7607;
                    const v25144 = v2377;
                    const v25145 = v2378;
                    const v25146 = true;
                    if (v7676) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}}}
            else {
              const v7684 = stdlib.ge(v2376, v7019);
              if (v7684) {
                ;
                const v7689 = 'Retrieve            ';
                const v7690 = await txn1.getOutput('Player_getOutcome', 'v7689', ctc12, v7689);
                if (v1590) {
                  stdlib.protect(ctc0, await interact.out(v6758, v7690), {
                    at: './index.rsh:358:23:application',
                    fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:445:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
                    msg: 'out',
                    who: 'Player_getOutcome'
                    });
                  }
                else {
                  }
                
                const v7696 = stdlib.safeSub(v2376, v7019);
                if (v6816) {
                  await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7697 = ['None', null];
                  const v7698 = {
                    None: 0,
                    Some: 1
                    }[v7697[0]];
                  const v7699 = stdlib.eq(v7698, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7700 = ['None', null];
                  const v7701 = {
                    None: 0,
                    Some: 1
                    }[v7700[0]];
                  const v7702 = stdlib.eq(v7701, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7703 = v7699 ? v7702 : false;
                  const v7705 = {
                    None: 0,
                    Some: 1
                    }[v6818[0]];
                  const v7706 = stdlib.eq(v7705, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7707 = v7703 ? v7706 : false;
                  const v7709 = {
                    None: 0,
                    Some: 1
                    }[v6824[0]];
                  const v7710 = stdlib.eq(v7709, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7711 = v7707 ? v7710 : false;
                  if (v7711) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7714 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7715 = stdlib.safeMul(v7714, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7716 = stdlib.ge(v7696, v7715);
                    const v25149 = v7696;
                    const v25150 = v2377;
                    const v25151 = v2378;
                    const v25152 = true;
                    if (v7716) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7725 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7726 = stdlib.safeMul(v7725, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7727 = stdlib.ge(v7696, v7726);
                    const v25155 = v7696;
                    const v25156 = v2377;
                    const v25157 = v2378;
                    const v25158 = true;
                    if (v7727) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}
                else {
                  await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7736 = {
                    None: 0,
                    Some: 1
                    }[v6817[0]];
                  const v7737 = stdlib.eq(v7736, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7739 = {
                    None: 0,
                    Some: 1
                    }[v6823[0]];
                  const v7740 = stdlib.eq(v7739, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7741 = v7737 ? v7740 : false;
                  const v7742 = ['None', null];
                  const v7743 = {
                    None: 0,
                    Some: 1
                    }[v7742[0]];
                  const v7744 = stdlib.eq(v7743, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7745 = v7741 ? v7744 : false;
                  const v7746 = ['None', null];
                  const v7747 = {
                    None: 0,
                    Some: 1
                    }[v7746[0]];
                  const v7748 = stdlib.eq(v7747, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7749 = v7745 ? v7748 : false;
                  if (v7749) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7752 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7753 = stdlib.safeMul(v7752, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7754 = stdlib.ge(v7696, v7753);
                    const v25161 = v7696;
                    const v25162 = v2377;
                    const v25163 = v2378;
                    const v25164 = true;
                    if (v7754) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7763 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7764 = stdlib.safeMul(v7763, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7765 = stdlib.ge(v7696, v7764);
                    const v25167 = v7696;
                    const v25168 = v2377;
                    const v25169 = v2378;
                    const v25170 = true;
                    if (v7765) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}}
              else {
                const v7773 = 'Retrieve            ';
                const v7774 = await txn1.getOutput('Player_getOutcome', 'v7773', ctc12, v7773);
                if (v1590) {
                  stdlib.protect(ctc0, await interact.out(v6758, v7774), {
                    at: './index.rsh:358:23:application',
                    fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:445:52:application call to "ret" (defined at: ./index.rsh:373:39:function exp)', 'at ./index.rsh:373:39:application call to [unknown function] (defined at: ./index.rsh:373:39:function exp)'],
                    msg: 'out',
                    who: 'Player_getOutcome'
                    });
                  }
                else {
                  }
                
                const v7780 = stdlib.safeSub(v2376, v7019);
                if (v6816) {
                  await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7781 = ['None', null];
                  const v7782 = {
                    None: 0,
                    Some: 1
                    }[v7781[0]];
                  const v7783 = stdlib.eq(v7782, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7784 = ['None', null];
                  const v7785 = {
                    None: 0,
                    Some: 1
                    }[v7784[0]];
                  const v7786 = stdlib.eq(v7785, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7787 = v7783 ? v7786 : false;
                  const v7789 = {
                    None: 0,
                    Some: 1
                    }[v6818[0]];
                  const v7790 = stdlib.eq(v7789, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7791 = v7787 ? v7790 : false;
                  const v7793 = {
                    None: 0,
                    Some: 1
                    }[v6824[0]];
                  const v7794 = stdlib.eq(v7793, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7795 = v7791 ? v7794 : false;
                  if (v7795) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7798 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7799 = stdlib.safeMul(v7798, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7800 = stdlib.ge(v7780, v7799);
                    const v25173 = v7780;
                    const v25174 = v2377;
                    const v25175 = v2378;
                    const v25176 = true;
                    if (v7800) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7809 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7810 = stdlib.safeMul(v7809, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7811 = stdlib.ge(v7780, v7810);
                    const v25179 = v7780;
                    const v25180 = v2377;
                    const v25181 = v2378;
                    const v25182 = true;
                    if (v7811) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}
                else {
                  await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
                  await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
                  const v7820 = {
                    None: 0,
                    Some: 1
                    }[v6817[0]];
                  const v7821 = stdlib.eq(v7820, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7823 = {
                    None: 0,
                    Some: 1
                    }[v6823[0]];
                  const v7824 = stdlib.eq(v7823, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7825 = v7821 ? v7824 : false;
                  const v7826 = ['None', null];
                  const v7827 = {
                    None: 0,
                    Some: 1
                    }[v7826[0]];
                  const v7828 = stdlib.eq(v7827, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7829 = v7825 ? v7828 : false;
                  const v7830 = ['None', null];
                  const v7831 = {
                    None: 0,
                    Some: 1
                    }[v7830[0]];
                  const v7832 = stdlib.eq(v7831, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
                  const v7833 = v7829 ? v7832 : false;
                  if (v7833) {
                    await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
                    const v7836 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7837 = stdlib.safeMul(v7836, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7838 = stdlib.ge(v7780, v7837);
                    const v25185 = v7780;
                    const v25186 = v2377;
                    const v25187 = v2378;
                    const v25188 = true;
                    if (v7838) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}
                  else {
                    const v7847 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                    const v7848 = stdlib.safeMul(v7847, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                    const v7849 = stdlib.ge(v7780, v7848);
                    const v25191 = v7780;
                    const v25192 = v2377;
                    const v25193 = v2378;
                    const v25194 = true;
                    if (v7849) {
                      return;
                      }
                    else {
                      ;
                      return;
                      }}}}}}}}
      break;
      }
    case 'Player_placeBet0_113': {
      const v8104 = v2717[1];
      return;
      break;
      }
    case 'Player_submitHand0_113': {
      const v9450 = v2717[1];
      return;
      break;
      }
    case 'Player_surrender0_113': {
      const v10796 = v2717[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_placeBet4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_placeBet4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_placeBet4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc11 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc9,
    Player_buyInsurance0_113: ctc8,
    Player_doubleDown0_113: ctc8,
    Player_getOutcome0_113: ctc8,
    Player_placeBet0_113: ctc8,
    Player_submitHand0_113: ctc10,
    Player_surrender0_113: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2364, v2366, v2376, v2377, v2378, v2379] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4]);
  const v2393 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:196:54:application call to [unknown function] (defined at: ./index.rsh:196:54:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_placeBet0_113" (defined at: ./index.rsh:196:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'in',
    who: 'Player_placeBet'
    });
  const v2401 = ['Player_placeBet0_113', v2393];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2364, v2366, v2376, v2377, v2378, v2379, v2401],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v2366, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Dealer_submitHand0_113': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Player_buyInsurance0_113': {
          const v4066 = v2717[1];
          
          break;
          }
        case 'Player_doubleDown0_113': {
          const v5412 = v2717[1];
          
          break;
          }
        case 'Player_getOutcome0_113': {
          const v6758 = v2717[1];
          
          break;
          }
        case 'Player_placeBet0_113': {
          const v8104 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_placeBet"
            });
          sim_r.txns.push({
            amt: v2366,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v9204 = v8104[stdlib.checkedBigNumberify('./index.rsh:196:22:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, null);
          if (v9204) {
            await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, v2366);
            const v9210 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, v9210);
            await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, v9210);
            const v9212 = await txn1.getOutput('Player_placeBet', 'v2366', ctc2, v2366);
            
            const v9218 = stdlib.safeAdd(v2376, v2366);
            const v25515 = v9218;
            const v25516 = v2377;
            const v25517 = v2378;
            const v25518 = v2379;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, v2366);
            const v9220 = {
              boughtInsurance: false,
              cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              doubledDown: false,
              surrendered: false
              };
            await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, v9220);
            await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, v9220);
            const v9222 = await txn1.getOutput('Player_placeBet', 'v2366', ctc2, v2366);
            
            const v9228 = stdlib.safeAdd(v2376, v2366);
            const v25521 = v9228;
            const v25522 = v2377;
            const v25523 = v2378;
            const v25524 = v2379;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Player_submitHand0_113': {
          const v9450 = v2717[1];
          
          break;
          }
        case 'Player_surrender0_113': {
          const v10796 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Dealer_submitHand0_113': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Player_buyInsurance0_113': {
      const v4066 = v2717[1];
      return;
      break;
      }
    case 'Player_doubleDown0_113': {
      const v5412 = v2717[1];
      return;
      break;
      }
    case 'Player_getOutcome0_113': {
      const v6758 = v2717[1];
      return;
      break;
      }
    case 'Player_placeBet0_113': {
      const v8104 = v2717[1];
      undefined /* setApiDetails */;
      ;
      const v9204 = v8104[stdlib.checkedBigNumberify('./index.rsh:196:22:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc7, v2716, ctc0, null);
      const v9207 = ['Some', null];
      const v9208 = {
        None: 0,
        Some: 1
        }[v9207[0]];
      const v9209 = stdlib.eq(v9208, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v9209, {
        at: './index.rsh:201:48:application',
        fs: ['at ./index.rsh:199:39:application call to [unknown function] (defined at: ./index.rsh:199:39:function exp)'],
        msg: null,
        who: 'Player_placeBet'
        });
      if (v9204) {
        await stdlib.mapSet(map1, ctc7, v2716, ctc2, v2366);
        const v9210 = {
          boughtInsurance: false,
          cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          doubledDown: false,
          surrendered: false
          };
        await stdlib.mapSet(map3, ctc7, v2716, ctc5, v9210);
        await stdlib.mapSet(map4, ctc7, v2716, ctc5, v9210);
        const v9212 = await txn1.getOutput('Player_placeBet', 'v2366', ctc2, v2366);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v8104, v9212), {
            at: './index.rsh:196:23:application',
            fs: ['at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)', 'at ./index.rsh:209:44:application call to "ret" (defined at: ./index.rsh:199:39:function exp)', 'at ./index.rsh:199:39:application call to [unknown function] (defined at: ./index.rsh:199:39:function exp)'],
            msg: 'out',
            who: 'Player_placeBet'
            });
          }
        else {
          }
        
        const v9218 = stdlib.safeAdd(v2376, v2366);
        const v25515 = v9218;
        const v25516 = v2377;
        const v25517 = v2378;
        const v25518 = v2379;
        return;
        }
      else {
        await stdlib.mapSet(map2, ctc7, v2716, ctc2, v2366);
        const v9220 = {
          boughtInsurance: false,
          cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          doubledDown: false,
          surrendered: false
          };
        await stdlib.mapSet(map3, ctc7, v2716, ctc5, v9220);
        await stdlib.mapSet(map4, ctc7, v2716, ctc5, v9220);
        const v9222 = await txn1.getOutput('Player_placeBet', 'v2366', ctc2, v2366);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v8104, v9222), {
            at: './index.rsh:196:23:application',
            fs: ['at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)', 'at ./index.rsh:209:44:application call to "ret" (defined at: ./index.rsh:199:39:function exp)', 'at ./index.rsh:199:39:application call to [unknown function] (defined at: ./index.rsh:199:39:function exp)'],
            msg: 'out',
            who: 'Player_placeBet'
            });
          }
        else {
          }
        
        const v9228 = stdlib.safeAdd(v2376, v2366);
        const v25521 = v9228;
        const v25522 = v2377;
        const v25523 = v2378;
        const v25524 = v2379;
        return;
        }
      break;
      }
    case 'Player_submitHand0_113': {
      const v9450 = v2717[1];
      return;
      break;
      }
    case 'Player_surrender0_113': {
      const v10796 = v2717[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_submitHand4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_submitHand4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_submitHand4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc9,
    Player_buyInsurance0_113: ctc10,
    Player_doubleDown0_113: ctc10,
    Player_getOutcome0_113: ctc10,
    Player_placeBet0_113: ctc10,
    Player_submitHand0_113: ctc8,
    Player_surrender0_113: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2364, v2366, v2376, v2377, v2378, v2379] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4]);
  const v2501 = ctc.selfAddress();
  const v2503 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:329:78:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_submitHand0_113" (defined at: ./index.rsh:329:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'in',
    who: 'Player_submitHand'
    });
  const v2524 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2501, ctc0), null);
  const v2525 = {
    None: 0,
    Some: 1
    }[v2524[0]];
  const v2526 = stdlib.eq(v2525, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2526, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:336:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:329:78:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_submitHand0_113" (defined at: ./index.rsh:329:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You did not place a bet on this game',
    who: 'Player_submitHand'
    });
  const v2537 = ['Player_submitHand0_113', v2503];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2364, v2366, v2376, v2377, v2378, v2379, v2537],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:338:33:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Dealer_submitHand0_113': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Player_buyInsurance0_113': {
          const v4066 = v2717[1];
          
          break;
          }
        case 'Player_doubleDown0_113': {
          const v5412 = v2717[1];
          
          break;
          }
        case 'Player_getOutcome0_113': {
          const v6758 = v2717[1];
          
          break;
          }
        case 'Player_placeBet0_113': {
          const v8104 = v2717[1];
          
          break;
          }
        case 'Player_submitHand0_113': {
          const v9450 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_submitHand"
            });
          const v9537 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '0')];
          const v9540 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc7, v2716, ctc2), null);
          const v9541 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc7, v2716, ctc2), null);
          const v9542 = v9537 ? v9540 : v9541;
          const v9546 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc7, v2716, ctc5), null);
          const v9547 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc7, v2716, ctc5), null);
          const v9548 = v9537 ? v9546 : v9547;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2716, ctc0), null);
          ;
          const v10578 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '1')];
          const v10579 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '2')];
          let v10583;
          switch (v9542[0]) {
            case 'None': {
              const v10584 = v9542[1];
              v10583 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v10585 = v9542[1];
              v10583 = v10585;
              
              break;
              }
            }
          let v10589;
          switch (v9548[0]) {
            case 'None': {
              const v10590 = v9548[1];
              const v10591 = {
                boughtInsurance: false,
                cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                doubledDown: false,
                surrendered: false
                };
              v10589 = v10591;
              
              break;
              }
            case 'Some': {
              const v10593 = v9548[1];
              v10589 = v10593;
              
              break;
              }
            }
          if (v9537) {
            const v10601 = v10589.boughtInsurance;
            const v10604 = v10589.doubledDown;
            const v10605 = v10589.surrendered;
            const v10606 = {
              boughtInsurance: v10601,
              cardCount: v10579,
              cardValue: v10578,
              doubledDown: v10604,
              surrendered: v10605
              };
            await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, v10606);
            const v10607 = await txn1.getOutput('Player_submitHand', 'v10583', ctc2, v10583);
            
            const v25845 = v2376;
            const v25846 = v2377;
            const v25847 = v2378;
            const v25848 = v2379;
            sim_r.isHalt = false;
            }
          else {
            const v10616 = v10589.boughtInsurance;
            const v10619 = v10589.doubledDown;
            const v10620 = v10589.surrendered;
            const v10621 = {
              boughtInsurance: v10616,
              cardCount: v10579,
              cardValue: v10578,
              doubledDown: v10619,
              surrendered: v10620
              };
            await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, v10621);
            const v10622 = await txn1.getOutput('Player_submitHand', 'v10583', ctc2, v10583);
            
            const v25851 = v2376;
            const v25852 = v2377;
            const v25853 = v2378;
            const v25854 = v2379;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Player_surrender0_113': {
          const v10796 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Dealer_submitHand0_113': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Player_buyInsurance0_113': {
      const v4066 = v2717[1];
      return;
      break;
      }
    case 'Player_doubleDown0_113': {
      const v5412 = v2717[1];
      return;
      break;
      }
    case 'Player_getOutcome0_113': {
      const v6758 = v2717[1];
      return;
      break;
      }
    case 'Player_placeBet0_113': {
      const v8104 = v2717[1];
      return;
      break;
      }
    case 'Player_submitHand0_113': {
      const v9450 = v2717[1];
      undefined /* setApiDetails */;
      const v9537 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '0')];
      const v9540 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2716, ctc2), null);
      const v9541 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2716, ctc2), null);
      const v9542 = v9537 ? v9540 : v9541;
      const v9546 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2716, ctc5), null);
      const v9547 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2716, ctc5), null);
      const v9548 = v9537 ? v9546 : v9547;
      const v9554 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2716, ctc0), null);
      const v9555 = {
        None: 0,
        Some: 1
        }[v9554[0]];
      const v9556 = stdlib.eq(v9555, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v9556, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:336:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:329:78:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:329:78:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You did not place a bet on this game',
        who: 'Player_submitHand'
        });
      ;
      const v10578 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '1')];
      const v10579 = v9450[stdlib.checkedBigNumberify('./index.rsh:329:22:spread', stdlib.UInt_max, '2')];
      let v10583;
      switch (v9542[0]) {
        case 'None': {
          const v10584 = v9542[1];
          v10583 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v10585 = v9542[1];
          v10583 = v10585;
          
          break;
          }
        }
      let v10589;
      switch (v9548[0]) {
        case 'None': {
          const v10590 = v9548[1];
          const v10591 = {
            boughtInsurance: false,
            cardCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            cardValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            doubledDown: false,
            surrendered: false
            };
          v10589 = v10591;
          
          break;
          }
        case 'Some': {
          const v10593 = v9548[1];
          v10589 = v10593;
          
          break;
          }
        }
      if (v9537) {
        const v10601 = v10589.boughtInsurance;
        const v10604 = v10589.doubledDown;
        const v10605 = v10589.surrendered;
        const v10606 = {
          boughtInsurance: v10601,
          cardCount: v10579,
          cardValue: v10578,
          doubledDown: v10604,
          surrendered: v10605
          };
        await stdlib.mapSet(map3, ctc7, v2716, ctc5, v10606);
        const v10607 = await txn1.getOutput('Player_submitHand', 'v10583', ctc2, v10583);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v9450, v10607), {
            at: './index.rsh:329:23:application',
            fs: ['at ./index.rsh:329:23:application call to [unknown function] (defined at: ./index.rsh:329:23:function exp)', 'at ./index.rsh:353:44:application call to "ret" (defined at: ./index.rsh:339:39:function exp)', 'at ./index.rsh:339:39:application call to [unknown function] (defined at: ./index.rsh:339:39:function exp)'],
            msg: 'out',
            who: 'Player_submitHand'
            });
          }
        else {
          }
        
        const v25845 = v2376;
        const v25846 = v2377;
        const v25847 = v2378;
        const v25848 = v2379;
        return;
        }
      else {
        const v10616 = v10589.boughtInsurance;
        const v10619 = v10589.doubledDown;
        const v10620 = v10589.surrendered;
        const v10621 = {
          boughtInsurance: v10616,
          cardCount: v10579,
          cardValue: v10578,
          doubledDown: v10619,
          surrendered: v10620
          };
        await stdlib.mapSet(map4, ctc7, v2716, ctc5, v10621);
        const v10622 = await txn1.getOutput('Player_submitHand', 'v10583', ctc2, v10583);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v9450, v10622), {
            at: './index.rsh:329:23:application',
            fs: ['at ./index.rsh:329:23:application call to [unknown function] (defined at: ./index.rsh:329:23:function exp)', 'at ./index.rsh:353:44:application call to "ret" (defined at: ./index.rsh:339:39:function exp)', 'at ./index.rsh:339:39:application call to [unknown function] (defined at: ./index.rsh:339:39:function exp)'],
            msg: 'out',
            who: 'Player_submitHand'
            });
          }
        else {
          }
        
        const v25851 = v2376;
        const v25852 = v2377;
        const v25853 = v2378;
        const v25854 = v2379;
        return;
        }
      break;
      }
    case 'Player_surrender0_113': {
      const v10796 = v2717[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_surrender4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_surrender4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_surrender4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    boughtInsurance: ctc4,
    cardCount: ctc2,
    cardValue: ctc2,
    doubledDown: ctc4,
    surrendered: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc2, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Dealer_submitHand0_113: ctc9,
    Player_buyInsurance0_113: ctc10,
    Player_doubleDown0_113: ctc10,
    Player_getOutcome0_113: ctc10,
    Player_placeBet0_113: ctc10,
    Player_submitHand0_113: ctc8,
    Player_surrender0_113: ctc8
    });
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc6;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2364, v2366, v2376, v2377, v2378, v2379] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4]);
  const v2469 = ctc.selfAddress();
  const v2471 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_surrender0_113" (defined at: ./index.rsh:292:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'in',
    who: 'Player_surrender'
    });
  const v2472 = v2471[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2478 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2469, ctc2), null);
  const v2479 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2469, ctc2), null);
  const v2480 = v2472 ? v2478 : v2479;
  let v2481;
  switch (v2480[0]) {
    case 'None': {
      const v2482 = v2480[1];
      v2481 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v2483 = v2480[1];
      v2481 = v2483;
      
      break;
      }
    }
  const v2484 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2469, ctc0), null);
  const v2485 = {
    None: 0,
    Some: 1
    }[v2484[0]];
  const v2486 = stdlib.eq(v2485, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2486, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:296:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_surrender0_113" (defined at: ./index.rsh:292:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You did not place a bet on this game',
    who: 'Player_surrender'
    });
  const v2488 = stdlib.eq(v2481, v2366);
  stdlib.assert(v2488, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to "runPlayer_surrender0_113" (defined at: ./index.rsh:292:22:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You are not allowed to surrender at this point',
    who: 'Player_surrender'
    });
  const v2499 = ['Player_surrender0_113', v2471];
  
  let v2707;
  switch (v2480[0]) {
    case 'None': {
      const v2708 = v2480[1];
      v2707 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v2709 = v2480[1];
      v2707 = v2709;
      
      break;
      }
    }
  const v2714 = stdlib.eq(v2707, v2366);
  stdlib.assert(v2714, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
    msg: 'You are not allowed to surrender at this point',
    who: 'Player_surrender'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2364, v2366, v2376, v2377, v2378, v2379, v2499],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:302:33:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Dealer_submitHand0_113': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Player_buyInsurance0_113': {
          const v4066 = v2717[1];
          
          break;
          }
        case 'Player_doubleDown0_113': {
          const v5412 = v2717[1];
          
          break;
          }
        case 'Player_getOutcome0_113': {
          const v6758 = v2717[1];
          
          break;
          }
        case 'Player_placeBet0_113': {
          const v8104 = v2717[1];
          
          break;
          }
        case 'Player_submitHand0_113': {
          const v9450 = v2717[1];
          
          break;
          }
        case 'Player_surrender0_113': {
          const v10796 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_surrender"
            });
          const v10905 = v10796[stdlib.checkedBigNumberify('./index.rsh:292:22:spread', stdlib.UInt_max, '0')];
          const v10908 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc7, v2716, ctc2), null);
          const v10909 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc7, v2716, ctc2), null);
          const v10910 = v10905 ? v10908 : v10909;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2716, ctc0), null);
          ;
          const v11979 = v10796[stdlib.checkedBigNumberify('./index.rsh:292:22:spread', stdlib.UInt_max, '1')];
          let v11984;
          switch (v10910[0]) {
            case 'None': {
              const v11985 = v10910[1];
              v11984 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v11986 = v10910[1];
              v11984 = v11986;
              
              break;
              }
            }
          const v11996 = stdlib.safeDiv(v11984, stdlib.checkedBigNumberify('./index.rsh:304:69:decimal', stdlib.UInt_max, '2'));
          const v11998 = stdlib.eq(v2378, stdlib.checkedBigNumberify('./index.rsh:34:27:decimal', stdlib.UInt_max, '21'));
          const v11999 = stdlib.eq(v2377, stdlib.checkedBigNumberify('./index.rsh:37:58:decimal', stdlib.UInt_max, '2'));
          const v12000 = stdlib.eq(v11979, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
          const v12174 = v12000 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v12175 = v11999 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '5') : v12174;
          const v11997 = v11998 ? v12175 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v12001 = stdlib.ge(v2376, v11996);
          if (v12001) {
            sim_r.txns.push({
              kind: 'from',
              to: v2716,
              tok: undefined /* Nothing */
              });
            const v12006 = stdlib.eq(v11997, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v12007 = 'Dealer Wins         ';
            const v12008 = 'End                 ';
            const v12009 = v12006 ? v12007 : v12008;
            const v12010 = await txn1.getOutput('Player_surrender', 'v12009', ctc12, v12009);
            
            if (v10905) {
              await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
              const v12018 = ['None', null];
              const v12019 = {
                None: 0,
                Some: 1
                }[v12018[0]];
              const v12020 = stdlib.eq(v12019, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12021 = ['None', null];
              const v12022 = {
                None: 0,
                Some: 1
                }[v12021[0]];
              const v12023 = stdlib.eq(v12022, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12024 = v12020 ? v12023 : false;
              const v12026 = {
                None: 0,
                Some: 1
                }[v10909[0]];
              const v12027 = stdlib.eq(v12026, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12028 = v12024 ? v12027 : false;
              const v12029 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc7, v2716, ctc5), null);
              const v12030 = {
                None: 0,
                Some: 1
                }[v12029[0]];
              const v12031 = stdlib.eq(v12030, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12032 = v12028 ? v12031 : false;
              if (v12032) {
                await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                const v12035 = stdlib.safeSub(v2376, v11996);
                const v12036 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12037 = stdlib.safeMul(v12036, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12038 = stdlib.ge(v12035, v12037);
                const v26175 = v12035;
                const v26176 = v2377;
                const v26177 = v2378;
                const v26178 = v2379;
                if (v12038) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v12041 = stdlib.safeSub(v2376, v11996);
                const v12042 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12043 = stdlib.safeMul(v12042, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12044 = stdlib.ge(v12041, v12043);
                const v26181 = v12041;
                const v26182 = v2377;
                const v26183 = v2378;
                const v26184 = v2379;
                if (v12044) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
              const v12047 = {
                None: 0,
                Some: 1
                }[v10908[0]];
              const v12048 = stdlib.eq(v12047, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12049 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc7, v2716, ctc5), null);
              const v12050 = {
                None: 0,
                Some: 1
                }[v12049[0]];
              const v12051 = stdlib.eq(v12050, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12052 = v12048 ? v12051 : false;
              const v12053 = ['None', null];
              const v12054 = {
                None: 0,
                Some: 1
                }[v12053[0]];
              const v12055 = stdlib.eq(v12054, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12056 = v12052 ? v12055 : false;
              const v12057 = ['None', null];
              const v12058 = {
                None: 0,
                Some: 1
                }[v12057[0]];
              const v12059 = stdlib.eq(v12058, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12060 = v12056 ? v12059 : false;
              if (v12060) {
                await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                const v12063 = stdlib.safeSub(v2376, v11996);
                const v12064 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12065 = stdlib.safeMul(v12064, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12066 = stdlib.ge(v12063, v12065);
                const v26187 = v12063;
                const v26188 = v2377;
                const v26189 = v2378;
                const v26190 = v2379;
                if (v12066) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v12069 = stdlib.safeSub(v2376, v11996);
                const v12070 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12071 = stdlib.safeMul(v12070, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12072 = stdlib.ge(v12069, v12071);
                const v26193 = v12069;
                const v26194 = v2377;
                const v26195 = v2378;
                const v26196 = v2379;
                if (v12072) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v12074 = stdlib.eq(v11997, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v12075 = 'Dealer Wins         ';
            const v12076 = 'End                 ';
            const v12077 = v12074 ? v12075 : v12076;
            const v12078 = await txn1.getOutput('Player_surrender', 'v12077', ctc12, v12077);
            
            if (v10905) {
              await stdlib.simMapSet(sim_r, 1, ctc7, v2716, ctc2, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 3, ctc7, v2716, ctc5, undefined /* Nothing */);
              const v12086 = ['None', null];
              const v12087 = {
                None: 0,
                Some: 1
                }[v12086[0]];
              const v12088 = stdlib.eq(v12087, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12089 = ['None', null];
              const v12090 = {
                None: 0,
                Some: 1
                }[v12089[0]];
              const v12091 = stdlib.eq(v12090, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12092 = v12088 ? v12091 : false;
              const v12094 = {
                None: 0,
                Some: 1
                }[v10909[0]];
              const v12095 = stdlib.eq(v12094, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12096 = v12092 ? v12095 : false;
              const v12097 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc7, v2716, ctc5), null);
              const v12098 = {
                None: 0,
                Some: 1
                }[v12097[0]];
              const v12099 = stdlib.eq(v12098, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12100 = v12096 ? v12099 : false;
              if (v12100) {
                await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                const v12103 = stdlib.safeSub(v2376, v11996);
                const v12104 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12105 = stdlib.safeMul(v12104, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12106 = stdlib.ge(v12103, v12105);
                const v26199 = v12103;
                const v26200 = v2377;
                const v26201 = v2378;
                const v26202 = v2379;
                if (v12106) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v12109 = stdlib.safeSub(v2376, v11996);
                const v12110 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12111 = stdlib.safeMul(v12110, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12112 = stdlib.ge(v12109, v12111);
                const v26205 = v12109;
                const v26206 = v2377;
                const v26207 = v2378;
                const v26208 = v2379;
                if (v12112) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              await stdlib.simMapSet(sim_r, 2, ctc7, v2716, ctc2, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 4, ctc7, v2716, ctc5, undefined /* Nothing */);
              const v12115 = {
                None: 0,
                Some: 1
                }[v10908[0]];
              const v12116 = stdlib.eq(v12115, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12117 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc7, v2716, ctc5), null);
              const v12118 = {
                None: 0,
                Some: 1
                }[v12117[0]];
              const v12119 = stdlib.eq(v12118, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12120 = v12116 ? v12119 : false;
              const v12121 = ['None', null];
              const v12122 = {
                None: 0,
                Some: 1
                }[v12121[0]];
              const v12123 = stdlib.eq(v12122, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12124 = v12120 ? v12123 : false;
              const v12125 = ['None', null];
              const v12126 = {
                None: 0,
                Some: 1
                }[v12125[0]];
              const v12127 = stdlib.eq(v12126, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
              const v12128 = v12124 ? v12127 : false;
              if (v12128) {
                await stdlib.simMapSet(sim_r, 0, ctc7, v2716, ctc0, undefined /* Nothing */);
                const v12131 = stdlib.safeSub(v2376, v11996);
                const v12132 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12133 = stdlib.safeMul(v12132, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12134 = stdlib.ge(v12131, v12133);
                const v26211 = v12131;
                const v26212 = v2377;
                const v26213 = v2378;
                const v26214 = v2379;
                if (v12134) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v12137 = stdlib.safeSub(v2376, v11996);
                const v12138 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
                const v12139 = stdlib.safeMul(v12138, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
                const v12140 = stdlib.ge(v12137, v12139);
                const v26217 = v12137;
                const v26218 = v2377;
                const v26219 = v2378;
                const v26220 = v2379;
                if (v12140) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v2364,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1590, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Dealer_submitHand0_113': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Player_buyInsurance0_113': {
      const v4066 = v2717[1];
      return;
      break;
      }
    case 'Player_doubleDown0_113': {
      const v5412 = v2717[1];
      return;
      break;
      }
    case 'Player_getOutcome0_113': {
      const v6758 = v2717[1];
      return;
      break;
      }
    case 'Player_placeBet0_113': {
      const v8104 = v2717[1];
      return;
      break;
      }
    case 'Player_submitHand0_113': {
      const v9450 = v2717[1];
      return;
      break;
      }
    case 'Player_surrender0_113': {
      const v10796 = v2717[1];
      undefined /* setApiDetails */;
      const v10905 = v10796[stdlib.checkedBigNumberify('./index.rsh:292:22:spread', stdlib.UInt_max, '0')];
      const v10908 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2716, ctc2), null);
      const v10909 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2716, ctc2), null);
      const v10910 = v10905 ? v10908 : v10909;
      let v10911;
      switch (v10910[0]) {
        case 'None': {
          const v10912 = v10910[1];
          v10911 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v10913 = v10910[1];
          v10911 = v10913;
          
          break;
          }
        }
      const v10914 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2716, ctc0), null);
      const v10915 = {
        None: 0,
        Some: 1
        }[v10914[0]];
      const v10916 = stdlib.eq(v10915, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v10916, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:296:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You did not place a bet on this game',
        who: 'Player_surrender'
        });
      const v10918 = stdlib.eq(v10911, v2366);
      stdlib.assert(v10918, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:292:77:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:292:77:function exp)', 'at ./index.rsh:168:84:application call to [unknown function] (defined at: ./index.rsh:168:84:function exp)'],
        msg: 'You are not allowed to surrender at this point',
        who: 'Player_surrender'
        });
      ;
      const v11979 = v10796[stdlib.checkedBigNumberify('./index.rsh:292:22:spread', stdlib.UInt_max, '1')];
      let v11984;
      switch (v10910[0]) {
        case 'None': {
          const v11985 = v10910[1];
          v11984 = stdlib.checkedBigNumberify('./index.rsh:14:23:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v11986 = v10910[1];
          v11984 = v11986;
          
          break;
          }
        }
      const v11991 = stdlib.eq(v11984, v2366);
      stdlib.assert(v11991, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:297:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:303:39:application call to [unknown function] (defined at: ./index.rsh:303:39:function exp)'],
        msg: 'You are not allowed to surrender at this point',
        who: 'Player_surrender'
        });
      const v11996 = stdlib.safeDiv(v11984, stdlib.checkedBigNumberify('./index.rsh:304:69:decimal', stdlib.UInt_max, '2'));
      const v11998 = stdlib.eq(v2378, stdlib.checkedBigNumberify('./index.rsh:34:27:decimal', stdlib.UInt_max, '21'));
      const v11999 = stdlib.eq(v2377, stdlib.checkedBigNumberify('./index.rsh:37:58:decimal', stdlib.UInt_max, '2'));
      const v12000 = stdlib.eq(v11979, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'));
      const v12174 = v12000 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v12175 = v11999 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '5') : v12174;
      const v11997 = v11998 ? v12175 : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v12001 = stdlib.ge(v2376, v11996);
      if (v12001) {
        ;
        const v12006 = stdlib.eq(v11997, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v12007 = 'Dealer Wins         ';
        const v12008 = 'End                 ';
        const v12009 = v12006 ? v12007 : v12008;
        const v12010 = await txn1.getOutput('Player_surrender', 'v12009', ctc12, v12009);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v10796, v12010), {
            at: './index.rsh:292:23:application',
            fs: ['at ./index.rsh:292:23:application call to [unknown function] (defined at: ./index.rsh:292:23:function exp)', 'at ./index.rsh:314:44:application call to "ret" (defined at: ./index.rsh:303:39:function exp)', 'at ./index.rsh:303:39:application call to [unknown function] (defined at: ./index.rsh:303:39:function exp)'],
            msg: 'out',
            who: 'Player_surrender'
            });
          }
        else {
          }
        
        if (v10905) {
          await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
          await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
          const v12018 = ['None', null];
          const v12019 = {
            None: 0,
            Some: 1
            }[v12018[0]];
          const v12020 = stdlib.eq(v12019, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12021 = ['None', null];
          const v12022 = {
            None: 0,
            Some: 1
            }[v12021[0]];
          const v12023 = stdlib.eq(v12022, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12024 = v12020 ? v12023 : false;
          const v12026 = {
            None: 0,
            Some: 1
            }[v10909[0]];
          const v12027 = stdlib.eq(v12026, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12028 = v12024 ? v12027 : false;
          const v12029 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2716, ctc5), null);
          const v12030 = {
            None: 0,
            Some: 1
            }[v12029[0]];
          const v12031 = stdlib.eq(v12030, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12032 = v12028 ? v12031 : false;
          if (v12032) {
            await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
            const v12035 = stdlib.safeSub(v2376, v11996);
            const v12036 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12037 = stdlib.safeMul(v12036, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12038 = stdlib.ge(v12035, v12037);
            const v26175 = v12035;
            const v26176 = v2377;
            const v26177 = v2378;
            const v26178 = v2379;
            if (v12038) {
              return;
              }
            else {
              ;
              return;
              }}
          else {
            const v12041 = stdlib.safeSub(v2376, v11996);
            const v12042 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12043 = stdlib.safeMul(v12042, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12044 = stdlib.ge(v12041, v12043);
            const v26181 = v12041;
            const v26182 = v2377;
            const v26183 = v2378;
            const v26184 = v2379;
            if (v12044) {
              return;
              }
            else {
              ;
              return;
              }}}
        else {
          await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
          await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
          const v12047 = {
            None: 0,
            Some: 1
            }[v10908[0]];
          const v12048 = stdlib.eq(v12047, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12049 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2716, ctc5), null);
          const v12050 = {
            None: 0,
            Some: 1
            }[v12049[0]];
          const v12051 = stdlib.eq(v12050, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12052 = v12048 ? v12051 : false;
          const v12053 = ['None', null];
          const v12054 = {
            None: 0,
            Some: 1
            }[v12053[0]];
          const v12055 = stdlib.eq(v12054, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12056 = v12052 ? v12055 : false;
          const v12057 = ['None', null];
          const v12058 = {
            None: 0,
            Some: 1
            }[v12057[0]];
          const v12059 = stdlib.eq(v12058, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12060 = v12056 ? v12059 : false;
          if (v12060) {
            await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
            const v12063 = stdlib.safeSub(v2376, v11996);
            const v12064 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12065 = stdlib.safeMul(v12064, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12066 = stdlib.ge(v12063, v12065);
            const v26187 = v12063;
            const v26188 = v2377;
            const v26189 = v2378;
            const v26190 = v2379;
            if (v12066) {
              return;
              }
            else {
              ;
              return;
              }}
          else {
            const v12069 = stdlib.safeSub(v2376, v11996);
            const v12070 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12071 = stdlib.safeMul(v12070, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12072 = stdlib.ge(v12069, v12071);
            const v26193 = v12069;
            const v26194 = v2377;
            const v26195 = v2378;
            const v26196 = v2379;
            if (v12072) {
              return;
              }
            else {
              ;
              return;
              }}}}
      else {
        const v12074 = stdlib.eq(v11997, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v12075 = 'Dealer Wins         ';
        const v12076 = 'End                 ';
        const v12077 = v12074 ? v12075 : v12076;
        const v12078 = await txn1.getOutput('Player_surrender', 'v12077', ctc12, v12077);
        if (v1590) {
          stdlib.protect(ctc0, await interact.out(v10796, v12078), {
            at: './index.rsh:292:23:application',
            fs: ['at ./index.rsh:292:23:application call to [unknown function] (defined at: ./index.rsh:292:23:function exp)', 'at ./index.rsh:314:44:application call to "ret" (defined at: ./index.rsh:303:39:function exp)', 'at ./index.rsh:303:39:application call to [unknown function] (defined at: ./index.rsh:303:39:function exp)'],
            msg: 'out',
            who: 'Player_surrender'
            });
          }
        else {
          }
        
        if (v10905) {
          await stdlib.mapSet(map1, ctc7, v2716, ctc2, undefined /* Nothing */);
          await stdlib.mapSet(map3, ctc7, v2716, ctc5, undefined /* Nothing */);
          const v12086 = ['None', null];
          const v12087 = {
            None: 0,
            Some: 1
            }[v12086[0]];
          const v12088 = stdlib.eq(v12087, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12089 = ['None', null];
          const v12090 = {
            None: 0,
            Some: 1
            }[v12089[0]];
          const v12091 = stdlib.eq(v12090, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12092 = v12088 ? v12091 : false;
          const v12094 = {
            None: 0,
            Some: 1
            }[v10909[0]];
          const v12095 = stdlib.eq(v12094, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12096 = v12092 ? v12095 : false;
          const v12097 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v2716, ctc5), null);
          const v12098 = {
            None: 0,
            Some: 1
            }[v12097[0]];
          const v12099 = stdlib.eq(v12098, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12100 = v12096 ? v12099 : false;
          if (v12100) {
            await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
            const v12103 = stdlib.safeSub(v2376, v11996);
            const v12104 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12105 = stdlib.safeMul(v12104, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12106 = stdlib.ge(v12103, v12105);
            const v26199 = v12103;
            const v26200 = v2377;
            const v26201 = v2378;
            const v26202 = v2379;
            if (v12106) {
              return;
              }
            else {
              ;
              return;
              }}
          else {
            const v12109 = stdlib.safeSub(v2376, v11996);
            const v12110 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12111 = stdlib.safeMul(v12110, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12112 = stdlib.ge(v12109, v12111);
            const v26205 = v12109;
            const v26206 = v2377;
            const v26207 = v2378;
            const v26208 = v2379;
            if (v12112) {
              return;
              }
            else {
              ;
              return;
              }}}
        else {
          await stdlib.mapSet(map2, ctc7, v2716, ctc2, undefined /* Nothing */);
          await stdlib.mapSet(map4, ctc7, v2716, ctc5, undefined /* Nothing */);
          const v12115 = {
            None: 0,
            Some: 1
            }[v10908[0]];
          const v12116 = stdlib.eq(v12115, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12117 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v2716, ctc5), null);
          const v12118 = {
            None: 0,
            Some: 1
            }[v12117[0]];
          const v12119 = stdlib.eq(v12118, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12120 = v12116 ? v12119 : false;
          const v12121 = ['None', null];
          const v12122 = {
            None: 0,
            Some: 1
            }[v12121[0]];
          const v12123 = stdlib.eq(v12122, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12124 = v12120 ? v12123 : false;
          const v12125 = ['None', null];
          const v12126 = {
            None: 0,
            Some: 1
            }[v12125[0]];
          const v12127 = stdlib.eq(v12126, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v12128 = v12124 ? v12127 : false;
          if (v12128) {
            await stdlib.mapSet(map0, ctc7, v2716, ctc0, undefined /* Nothing */);
            const v12131 = stdlib.safeSub(v2376, v11996);
            const v12132 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12133 = stdlib.safeMul(v12132, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12134 = stdlib.ge(v12131, v12133);
            const v26211 = v12131;
            const v26212 = v2377;
            const v26213 = v2378;
            const v26214 = v2379;
            if (v12134) {
              return;
              }
            else {
              ;
              return;
              }}
          else {
            const v12137 = stdlib.safeSub(v2376, v11996);
            const v12138 = stdlib.safeDiv(v2366, stdlib.checkedBigNumberify('./index.rsh:23:44:decimal', stdlib.UInt_max, '100'));
            const v12139 = stdlib.safeMul(v12138, stdlib.checkedBigNumberify('./index.rsh:23:51:decimal', stdlib.UInt_max, '250'));
            const v12140 = stdlib.ge(v12137, v12139);
            const v26217 = v12137;
            const v26218 = v2377;
            const v26219 = v2378;
            const v26220 = v2379;
            if (v12140) {
              return;
              }
            else {
              ;
              return;
              }}}}
      break;
      }
    }
  
  
  };
export async function Dealer_submitHand(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Dealer_submitHand expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Dealer_submitHand expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Dealer_submitHand4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_buyInsurance(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_buyInsurance expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_buyInsurance expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_buyInsurance4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_doubleDown(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_doubleDown expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_doubleDown expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_doubleDown4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_getOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_getOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_getOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_getOutcome4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_placeBet(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_placeBet expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_placeBet expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_placeBet4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_submitHand(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_submitHand expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_submitHand expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_submitHand4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_surrender(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_surrender expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_surrender expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_surrender4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Dealer_submitHand(uint64,uint64)void`, `Player_buyInsurance(byte)uint64`, `Player_doubleDown(byte)uint64`, `Player_getOutcome(byte)byte[20]`, `Player_placeBet(byte)uint64`, `Player_submitHand(byte,uint64,uint64)uint64`, `Player_surrender(byte,uint64,uint64)byte[20]`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[17])))void`],
    pure: [`bank()uint64`],
    sigs: [`Dealer_submitHand(uint64,uint64)void`, `Player_buyInsurance(byte)uint64`, `Player_doubleDown(byte)uint64`, `Player_getOutcome(byte)byte[20]`, `Player_placeBet(byte)uint64`, `Player_submitHand(byte,uint64,uint64)uint64`, `Player_surrender(byte,uint64,uint64)byte[20]`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[17])))void`, `bank()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCASAAFk+gGEtgHUkwEJ1HoUEwgCBBUQBSAoJg4AAQABAQEDAQQBAhREZWFsZXIgV2lucwAAAAAAAAAAAAgAAAAAAAAJPhRQbGF5ZXIgV2lucwAAAAAAAAAAABRQdXNoAAAAAAAAAAAAAAAAAAAAABRCbGFja2phY2sAAAAAAAAAAAAAABRSZXRyaWV2ZQAAAAAAAAAAAAAAAAgAAAAAAAApVxRFbmQAAAAAAAAAAAAAAAAAAAAAADEYQQTWKGRJIls1ASEKWzUCKWSCCwQEzqbWBBWUljsEJN/J/AQseaxyBGb9kLEEahTRVQSLyB/HBKRxPJYEtSPCGgTf2SMoBOljf3Q2GgCOCwDMAF4AlQB5BJQAsAD5BEwAAQReBGkANhoBFzYaAhc1CzUMIQqvKTQMFjQLFlBQKVBQNQshDDQBEkSIFXU0CyJbNQw0C1cIEjUNgAQYgxJ4NAwWUDQNULA0DIgVSzQNIlWNBxGYEr4U0wT/BQIFBQUPQv+iNhoBFzULIQqvKjQLFlEHCFAhDq9QUDULQv+lNhoBFzULIQqvJwU0CxZRBwhQIQ6vUFA1C0L/iTYaARc1CyEKrys0CxZRBwhQIQ6vUFA1C0L/bjYaARc1CyEKrycENAsWUQcIUCEOr1BQNQtC/1I2GgEXNhoCFzYaAxc1CzUMNQ0hCq+AAQU0DRZRBwg0DBZQNAsWUFBQNQtC/yU2GgEXNhoCFzYaAxc1CzUMNQ0hCq+AAQY0DRZRBwg0DBZQNAsWUFBQNQtC/vg0CyJbNQ00CyEKW0k1DCINNA0iDRBEKDULgAgAAAAAAAALJzQLULA0CzUENAw0DSMjMgY1DjUPNRA1ETUSNA9BA8Y0FTQUFlA0ExZQNBIWUDQRFlA0EBZRBwhQIQwyBjUCNQEpTFcAQWcoNAEWNAIWUGcxGSISRIgUJzQDQAAKgAQVH3x1NARQsCNDNA1XAQEXNQsoIQqvJwUxAFCIE5AoIQqvKjEAUIgThTQLTTUMKCEJrycEMQBQiBN0KCEJrysxAFCIE2k0C01JNRYiVY0CA6IDqkL+AzQNVwEBFzULKCEKrycFMQBQiBNEKCEKryoxAFCIEzk0C001DCghCa8nBDEAUIgTKCghCa8rMQBQiBMdNAtNSTUWIlWNAgSBBIlC/bc0DVcBARc1CyghCq8qMQBQiBL5NRkoIQqvJwUxAFCIEutJNRg0GTQLTTUMKCEJrysxAFCIEtY1FyghCa8nBDEAUIgSyEk1FjQXNAtNSTUaIlWNAgVXBV9C/V00FIgSyiEHKTEAUCiIEq4qIlUjEkQ0DVcBARdBD24hBSoxAFA0FBaIEpMhCa81CyEEKzEAUDQLiBKDIQQnBDEAUDQLiBJ3Jwc0FBZQsDQUFjUENBM0FAgjMgY1DjUPNRNC/l00C1cAARc1GCghCq8nBTEAUIgSOyghCq8qMQBQiBIwNBhNNRcoIQmvJwQxAFCIEh8oIQmvKzEAUIgSFDQYTTUWKCgpMQBQiBIGIlUjEkQ0CyNbNQ00CyEGWzUMNBciVY0CDxcPHUL8kjQLVwABFzUYKCEKryoxAFCIEdQ1FyghCq8nBTEAUIgRxkk1FjQXNBhNSTUNIlWNAg+bD6FC/Fs0ASEMEkSIEe40ExY1BDEZIhJEQv3qMQA1FTQLIls1DDQLIQpbNQ00CyEOWzUUgAT3cRNNNAwWUDQNFlA0FBZQsDQMiBGnNBU0DRZQNBQWUIERr1AjMgZC/YYjNAESRElXACA1FUkhEFs1DSERWzUUNAsXNQyABNUVGRQ0DBZQsDQMiBFoNA2IEUM0FTEAEkQ0DSIiIiMyBjUONQ81EDURNRI1E0L9F4gRP4GgjQaIEWs2GgE1C0L/XYgRLTYaATULQv+WiBEiNhoBNQtC+6oiMTQSRCELMTUSRCIxNhJEIjE3EkSIEQKBQa8iIkL88UL/DiEFJwUxAFCIEKkhBCcEMQBQiBCfNBciVSISKCEJrysxAFCIEJkiVSISECEGryJVIhIQIQivIlUiEhBBAD8hBykxAFCIEG00EzQNCUk1C0k0FCQKJQsPMgY1DjUPNRNC/Gs0EzQNCUk1C0k0FCQKJQsPMgY1DjUPNRNC/FA0EzQNCUk1C0k0FCQKJQsPMgY1DjUPNRNC/DU0EzQViBA5MRkhDxJEiBCJIjIKMgmIEI1C/FdITL9IiSKyASOyELIHsgiziUL87EL9QzQNVwERNQtC/Zw0DVcBETULQv36KCgpMQBQiA/YIlUjEkQ0DVcAARcURDQUiA/jNAwiVY0CACIAKEL6ZCEJrzUNQv/QNBZXARM1DUL/xjQWIlWNAgB5AIFC+kUiNQ1C/+00DCNbNQ1C/+Q0DFcAARcURDQLQQBsNBQ0DQg1CyEFKjEAUDQLFogPdiEEKzEAUCo0DFcBCFA0DFcJCFA0DFcRAVA0DFcSAVCID1SACAAAAAAAABCKNAsWULA0CxY1BDQTNBQIIzIGNQ41DzUTQvsyIQmvNQxC/5E0FlcBEzUMQv+HNBQ0DQg1CyEFJwUxAFA0CxaIDwkhBCcEMQBQKjQMVwEIUDQMVwkIUDQMVxEBUDQMVxIBUIgO5oAIAAAAAAAAEJo0CxZQsDQLFjUENBM0FAgjMgY1DjUPNRNC+sQoKCkxAFCIDq0iVSMSRDQNVxEBFxRENBSIDrg0DCJVjQIAIgAoQvk5IQmvNQ1C/9A0FlcBEzUNQv/GNBYiVY0CAHkAgUL5GiI1DUL/7TQMI1s1DUL/5DQMVxEBFxRENAtBAGw0FDQNCDULIQUqMQBQNAsWiA5LIQQrMQBQNAxXAAE0DFcBCFA0DFcJCFAqUDQMVxIBUIgOKYAIAAAAAAAAFgQ0CxZQsDQLFjUENBM0FAgjMgY1DjUPNRNC+gchCa81DEL/kTQWVwETNQxC/4c0FDQNCDULIQUnBTEAUDQLFogN3iEEJwQxAFA0DFcAATQMVwEIUDQMVwkIUCpQNAxXEgFQiA27gAgAAAAAAAAWFDQLFlCwNAsWNQQ0EzQUCCMyBjUONQ81E0L5mSgoKTEAUIgNgiJVIxJENBBENA0jWyINNA0hBlsiDRBENAwiVY0CACIAKEL4CSEJrzUNQv/LNBpXARM1DUL/wTQaIlWNAgFIAVBC9+oiNQ1C/+00DCNbNQ1C/+Q0DCNbNR40DCEGWzUgNB4iDTQgIg0QRDQMVwABFzUaNAxXEgEXNR80EiELEjUdNCAhDRI1HDQggRYMNRs0HDQeIQsSEDUMIyMhCzQgNBESTSMiNBtNIQw0DE00IDQRDU0jNBE0IA1NNBEhDQxNIyIhDDQMTTQbTTQRIQ0NTSM0H00jIQs0HE0hDzQfNB0QTYEDNBo0HRBNNBEhDRJNSTUeQAClNA0iNBQ0Gk0JIQsLNQw0EzQMD0EBATQMMQCIDIknCDUNgAgAAAAAAAAbpTQNULA0DTUENBM0DAk1DTQLQQFOIQUqMQBQiAw6IQQrMQBQiAwxIQavIlUiEiEIryJVIhIQNBgiVSISEDQWIlUiEhBBAXIhBykxAFCIDAg0DSM0DTQUJAolCw8yBjUONQ81EDUTQvgIIQmvNQxC/sI0GlcBEzUMQv64NB4jEkEB8ScGNQyACAAAAAAAABxQNAxQsDQMNQQ0C0ECbiEFKjEAUIgLsiEEKzEAUIgLqSEGryJVIhIhCK8iVSISEDQYIlUiEhA0FiJVIhIQQQKOIQcpMQBQiAuAIzQTNBQkCiULDzIGNQ41DzUQQveEJwg1DYAIAAAAAAAAG/o0DVCwNA01BDQTNAwJNQ00C0EA3CEFKjEAUIgLQCEEKzEAUIgLNyEGryJVIhIhCK8iVSISEDQYIlUiEhA0FiJVIhIQQQEAIQcpMQBQiAsONA0jNA00FCQKJQsPMgY1DjUPNRA1E0L3DiEFJwUxAFCICushBCcEMQBQiArhNBkiVSISNBciVSISECEGryJVIhIQIQivIlUiEhBBADshBykxAFCICrg0DSM0DTQUJAolCw8yBjUONQ81EDUTQva4NA0jNA00FCQKJQsPMgY1DjUPNRA1E0L2nzQNIzQNNBQkCiULDzIGNQ41DzUQNRNC9oYhBScFMQBQiApjIQQnBDEAUIgKWTQZIlUiEjQXIlUiEhAhBq8iVSISECEIryJVIhIQQQA7IQcpMQBQiAowNA0jNA00FCQKJQsPMgY1DjUPNRA1E0L2MDQNIzQNNBQkCiULDzIGNQ41DzUQNRNC9hc0DSM0DTQUJAolCw8yBjUONQ81EDUTQvX+NB4hCxJBAQw0DSI0FDQaTQk1DDQTNAwPQQGONAwxAIgJ5ycJNQ2ACAAAAAAAABysNA1QsDQNNQQ0EzQMCTUNNAtBAdshBSoxAFCICZghBCsxAFCICY8hBq8iVSISIQivIlUiEhA0GCJVIhIQNBYiVSISEEEB/yEHKTEAUIgJZjQNIzQNNBQkCiULDzIGNQ41DzUQNRNC9WYhBScFMQBQiAlDIQQnBDEAUIgJOTQZIlUiEjQXIlUiEhAhBq8iVSISECEIryJVIhIQQQAzIQcpMQBQiAkQIzQTNBQkCiULDzIGNQ41DzUQQvUUIzQTNBQkCiULDzIGNQ41DzUQQvT/IzQTNBQkCiULDzIGNQ41DzUQQvTqNB4hDBJBAhM0DSQKJQs1DDQTNAwPQQKINAwxAIgI1icKNQ2ACAAAAAAAAB1cNA1QsDQNNQQ0EzQMCTUNNAtBAtUhBSoxAFCICIchBCsxAFCICH4hBq8iVSISIQivIlUiEhA0GCJVIhIQNBYiVSISEEEC+SEHKTEAUIgIVTQNIzQNNBQkCiULDzIGNQ41DzUQNRNC9FUnCTUNgAgAAAAAAAAdADQNULA0DTUENBM0DAk1DTQLQQDcIQUqMQBQiAgRIQQrMQBQiAgIIQavIlUiEiEIryJVIhIQNBgiVSISEDQWIlUiEhBBAQAhBykxAFCIB980DSM0DTQUJAolCw8yBjUONQ81EDUTQvPfIQUnBTEAUIgHvCEEJwQxAFCIB7I0GSJVIhI0FyJVIhIQIQavIlUiEhAhCK8iVSISEEEAOyEHKTEAUIgHiTQNIzQNNBQkCiULDzIGNQ41DzUQNRNC84k0DSM0DTQUJAolCw8yBjUONQ81EDUTQvNwNA0jNA00FCQKJQsPMgY1DjUPNRA1E0LzVyEFJwUxAFCIBzQhBCcEMQBQiAcqNBkiVSISNBciVSISECEGryJVIhIQIQivIlUiEhBBADshBykxAFCIBwE0DSM0DTQUJAolCw8yBjUONQ81EDUTQvMBNA0jNA00FCQKJQsPMgY1DjUPNRA1E0Ly6DQNIzQNNBQkCiULDzIGNQ41DzUQNRNC8s80EzQND0ECAzQNMQCIBssnCzUMgAgAAAAAAAAeCTQMULA0DDUENBM0DQk1DDQLQQJQIQUqMQBQiAZ8IQQrMQBQiAZzIQavIlUiEiEIryJVIhIQNBgiVSISEDQWIlUiEhBBAnQhBykxAFCIBko0DCM0DDQUJAolCw8yBjUONQ81EDUTQvJKJwo1DYAIAAAAAAAAHbA0DVCwNA01BDQTNAwJNQ00C0EA3CEFKjEAUIgGBiEEKzEAUIgF/SEGryJVIhIhCK8iVSISEDQYIlUiEhA0FiJVIhIQQQEAIQcpMQBQiAXUNA0jNA00FCQKJQsPMgY1DjUPNRA1E0Lx1CEFJwUxAFCIBbEhBCcEMQBQiAWnNBkiVSISNBciVSISECEGryJVIhIQIQivIlUiEhBBADshBykxAFCIBX40DSM0DTQUJAolCw8yBjUONQ81EDUTQvF+NA0jNA00FCQKJQsPMgY1DjUPNRA1E0LxZTQNIzQNNBQkCiULDzIGNQ41DzUQNRNC8UwhBScFMQBQiAUpIQQnBDEAUIgFHzQZIlUiEjQXIlUiEhAhBq8iVSISECEIryJVIhIQQQA7IQcpMQBQiAT2NA0jNA00FCQKJQsPMgY1DjUPNRA1E0Lw9jQNIzQNNBQkCiULDzIGNQ41DzUQNRNC8N00DSM0DTQUJAolCw8yBjUONQ81EDUTQvDEJws1DIAIAAAAAAAAHl00DFCwNAw1BDQTNA0JNQw0C0EA3CEFKjEAUIgEgCEEKzEAUIgEdyEGryJVIhIhCK8iVSISEDQYIlUiEhA0FiJVIhIQQQEKIQcpMQBQiARONAwjNAw0FCQKJQsPMgY1DjUPNRA1E0LwTiEFJwUxAFCIBCshBCcEMQBQiAQhNBkiVSISNBciVSISECEGryJVIhIQIQivIlUiEhBBADshBykxAFCIA/g0DCM0DDQUJAolCw8yBjUONQ81EDUTQu/4NAwjNAw0FCQKJQsPMgY1DjUPNRA1E0Lv3zQMIzQMNBQkCiULDzIGNQ41DzUQNRNC78YhBScFMQBQiAOjIQQnBDEAUIgDmTQZIlUiEjQXIlUiEhAhBq8iVSISECEIryJVIhIQQQBFIQcpMQBQiANwNAwjNAw0FCQKJQsPMgY1DjUPNRA1E0LvcDQNVwEQNQtC7yk0DCM0DDQUJAolCw8yBjUONQ81EDUTQu9NNAwjNAw0FCQKJQsPMgY1DjUPNRA1E0LvNCEFJwUxAFA0FBaIAyQhCa81CyEEKzEAUDQLiAMUIQQnBDEAUDQLiAMIJwc0FBZQsDQUFjUENBM0FAgjMgY1DjUPNRNC7u40FiJVjQIATwBXQu1+IjULQv/tNBcjWzULQv/kNBhBAEohBCsxAFA0F1cAATQMFlA0DRZQNBdXEQFQNBdXEgFQiAKoJww0CxZQsDQLFjUEIzIGNQ41D0LulSEJrzUXQv+7NBZXARM1F0L/sSEEJwQxAFA0F1cAATQMFlA0DRZQNBdXEQFQNBdXEgFQiAJdJww0CxZQsDQLFjUEIzIGNQ41D0LuSkLulSgoKTEAUIgCMCJVIxJENAw0FBJENA0iVY0CAMwA0kLswyI1DEL/2TQNI1s1DEL/0DQMNBQSRDQMIQsKNQ0jIyELNAsjWyENEk0hDzQSIQsSTTQRIQ0STTUMNBM0DQ9BAJg0DTEAiAHqJw0nBjQMIxJNNQuACAAAAAAAAC7pNAtQsDQLNQQ0GEEA8SEFKjEAUIgBmyEEKzEAUIgBkiEGryJVIhIhCK8iVSISEDQWIlUiEhAoIQmvJwQxAFCIAXsiVSISEEEBFiEHKTEAUIgBXzQTNA0JSTULSTQUJAolCw8yBjUONQ81E0LtXSI1DEL/QDQNI1s1DEL/NycNJwY0DCMSTTULgAgAAAAAAAAvLTQLULA0CzUENBhB8GAhBSoxAFCIAQohBCsxAFCIAQEhBq8iVSISIQivIlUiEhA0FiJVIhIQKCEJrycEMQBQiADqIlUiEhBB8IUhBykxAFCIAM40EzQNCUk1C0k0FCQKJQsPMgY1DjUPNRNC7MwhBScFMQBQiACpIQQnBDEAUIgAnzQXIlUiEighCa8rMQBQiACZIlUiEhAhBq8iVSISECEIryJVIhIQQQA/IQcpMQBQiABtNBM0DQlJNQtJNBQkCiULDzIGNQ41DzUTQuxrNBM0DQlJNQtJNBQkCiULDzIGNQ41DzUTQuxQNBM0DQlJNQtJNBQkCiULDzIGNQ41DzUTQuw1QuzMSIlMCUk1BjIJiAAxiQlJQf/uSTUGiAApibwiTgJNNAcINQeJvkkWUQcIRQRNUIlMSb1A7+NLA4gAVkLv27FC79wxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRIlJVwAgNRVJIRBbNRRJIRFbNRNJgTBbNRJJgThbNRFXQAEXNRCJNAYINQaJNAY0B0oPQf9jQv9rsbIJQu91`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `476`,
    1001: `477`,
    1002: `477`,
    1003: `477`,
    1004: `478`,
    1005: `478`,
    1006: `479`,
    1007: `480`,
    1008: `480`,
    1009: `482`,
    101: `2`,
    1010: `482`,
    1011: `483`,
    1012: `484`,
    1013: `484`,
    1014: `485`,
    1015: `486`,
    1016: `486`,
    1017: `487`,
    1018: `487`,
    1019: `487`,
    102: `2`,
    1020: `489`,
    1021: `489`,
    1022: `490`,
    1023: `490`,
    1024: `491`,
    1025: `491`,
    1026: `492`,
    1027: `493`,
    1028: `493`,
    1029: `494`,
    103: `2`,
    1030: `494`,
    1031: `494`,
    1032: `495`,
    1033: `495`,
    1034: `496`,
    1035: `496`,
    1036: `497`,
    1037: `498`,
    1038: `499`,
    1039: `500`,
    104: `2`,
    1040: `500`,
    1041: `501`,
    1042: `502`,
    1043: `502`,
    1044: `503`,
    1045: `503`,
    1046: `504`,
    1047: `504`,
    1048: `505`,
    1049: `506`,
    105: `2`,
    1050: `507`,
    1051: `507`,
    1052: `508`,
    1053: `508`,
    1054: `509`,
    1055: `509`,
    1056: `510`,
    1057: `510`,
    1058: `511`,
    1059: `511`,
    106: `2`,
    1060: `511`,
    1061: `513`,
    1062: `513`,
    1063: `514`,
    1064: `514`,
    1065: `514`,
    1066: `515`,
    1067: `516`,
    1068: `516`,
    1069: `518`,
    107: `2`,
    1070: `519`,
    1071: `519`,
    1072: `520`,
    1073: `521`,
    1074: `521`,
    1075: `522`,
    1076: `522`,
    1077: `523`,
    1078: `524`,
    1079: `524`,
    108: `2`,
    1080: `524`,
    1081: `526`,
    1082: `527`,
    1083: `527`,
    1084: `528`,
    1085: `529`,
    1086: `530`,
    1087: `530`,
    1088: `531`,
    1089: `532`,
    109: `2`,
    1090: `532`,
    1091: `532`,
    1092: `533`,
    1093: `533`,
    1094: `534`,
    1095: `535`,
    1096: `535`,
    1097: `537`,
    1098: `538`,
    1099: `538`,
    11: `2`,
    110: `2`,
    1100: `539`,
    1101: `540`,
    1102: `540`,
    1103: `541`,
    1104: `541`,
    1105: `542`,
    1106: `543`,
    1107: `543`,
    1108: `543`,
    1109: `545`,
    111: `2`,
    1110: `546`,
    1111: `546`,
    1112: `547`,
    1113: `548`,
    1114: `549`,
    1115: `549`,
    1116: `550`,
    1117: `551`,
    1118: `551`,
    1119: `551`,
    112: `2`,
    1120: `552`,
    1121: `552`,
    1122: `553`,
    1123: `554`,
    1124: `554`,
    1125: `556`,
    1126: `557`,
    1127: `558`,
    1128: `559`,
    1129: `559`,
    113: `2`,
    1130: `560`,
    1131: `561`,
    1132: `561`,
    1133: `561`,
    1134: `562`,
    1135: `563`,
    1136: `564`,
    1137: `565`,
    1138: `566`,
    1139: `573`,
    114: `2`,
    1140: `573`,
    1141: `574`,
    1142: `575`,
    1143: `576`,
    1144: `576`,
    1145: `577`,
    1146: `577`,
    1147: `578`,
    1148: `578`,
    1149: `579`,
    115: `2`,
    1150: `580`,
    1151: `580`,
    1152: `581`,
    1153: `581`,
    1154: `582`,
    1155: `583`,
    1156: `584`,
    1157: `584`,
    1158: `584`,
    1159: `584`,
    116: `2`,
    1160: `584`,
    1161: `584`,
    1162: `585`,
    1163: `585`,
    1164: `585`,
    1165: `587`,
    1166: `587`,
    1167: `588`,
    1168: `588`,
    1169: `588`,
    117: `2`,
    1170: `589`,
    1171: `590`,
    1172: `590`,
    1173: `592`,
    1174: `593`,
    1175: `593`,
    1176: `594`,
    1177: `595`,
    1178: `596`,
    1179: `596`,
    118: `2`,
    1180: `597`,
    1181: `598`,
    1182: `598`,
    1183: `598`,
    1184: `599`,
    1185: `599`,
    1186: `601`,
    1187: `602`,
    1188: `602`,
    1189: `603`,
    119: `2`,
    1190: `604`,
    1191: `604`,
    1192: `605`,
    1193: `605`,
    1194: `606`,
    1195: `607`,
    1196: `607`,
    1197: `607`,
    1198: `608`,
    1199: `609`,
    12: `2`,
    120: `2`,
    1200: `609`,
    1201: `610`,
    1202: `610`,
    1203: `611`,
    1204: `611`,
    1205: `612`,
    1206: `613`,
    1207: `614`,
    1208: `614`,
    1209: `615`,
    121: `2`,
    1210: `616`,
    1211: `617`,
    1212: `617`,
    1213: `617`,
    1214: `617`,
    1215: `617`,
    1216: `617`,
    1217: `618`,
    1218: `618`,
    1219: `618`,
    122: `2`,
    1220: `620`,
    1221: `620`,
    1222: `621`,
    1223: `621`,
    1224: `622`,
    1225: `623`,
    1226: `626`,
    1227: `626`,
    1228: `626`,
    1229: `627`,
    123: `2`,
    1230: `627`,
    1231: `628`,
    1232: `629`,
    1233: `629`,
    1234: `631`,
    1235: `631`,
    1236: `632`,
    1237: `633`,
    1238: `634`,
    1239: `636`,
    124: `2`,
    1240: `636`,
    1241: `636`,
    1242: `638`,
    1243: `638`,
    1244: `639`,
    1245: `639`,
    1246: `640`,
    1247: `640`,
    1248: `641`,
    1249: `642`,
    125: `2`,
    1250: `643`,
    1251: `643`,
    1252: `644`,
    1253: `644`,
    1254: `645`,
    1255: `645`,
    1256: `646`,
    1257: `647`,
    1258: `647`,
    1259: `648`,
    126: `2`,
    1260: `648`,
    1261: `649`,
    1262: `649`,
    1263: `650`,
    1264: `651`,
    1265: `651`,
    1266: `652`,
    1267: `652`,
    1268: `652`,
    1269: `652`,
    127: `2`,
    1270: `652`,
    1271: `652`,
    1272: `653`,
    1273: `653`,
    1274: `654`,
    1275: `655`,
    1276: `656`,
    1277: `656`,
    1278: `657`,
    1279: `658`,
    128: `2`,
    1280: `659`,
    1281: `659`,
    1282: `660`,
    1283: `661`,
    1284: `662`,
    1285: `664`,
    1286: `664`,
    1287: `665`,
    1288: `665`,
    1289: `665`,
    129: `2`,
    1290: `667`,
    1291: `667`,
    1292: `668`,
    1293: `668`,
    1294: `669`,
    1295: `670`,
    1296: `671`,
    1297: `671`,
    1298: `672`,
    1299: `673`,
    13: `2`,
    130: `2`,
    1300: `674`,
    1301: `674`,
    1302: `675`,
    1303: `676`,
    1304: `677`,
    1305: `678`,
    1306: `678`,
    1307: `679`,
    1308: `679`,
    1309: `679`,
    131: `2`,
    1310: `681`,
    1311: `682`,
    1312: `682`,
    1313: `683`,
    1314: `684`,
    1315: `686`,
    1316: `687`,
    1317: `687`,
    1318: `687`,
    1319: `688`,
    132: `2`,
    1320: `688`,
    1321: `689`,
    1322: `690`,
    1323: `690`,
    1324: `691`,
    1325: `692`,
    1326: `692`,
    1327: `693`,
    1328: `693`,
    1329: `694`,
    133: `2`,
    1330: `695`,
    1331: `695`,
    1332: `696`,
    1333: `696`,
    1334: `697`,
    1335: `698`,
    1336: `698`,
    1337: `699`,
    1338: `699`,
    1339: `699`,
    134: `2`,
    1340: `699`,
    1341: `699`,
    1342: `699`,
    1343: `700`,
    1344: `700`,
    1345: `701`,
    1346: `702`,
    1347: `703`,
    1348: `705`,
    1349: `705`,
    135: `2`,
    1350: `706`,
    1351: `706`,
    1352: `706`,
    1353: `707`,
    1354: `707`,
    1355: `708`,
    1356: `708`,
    1357: `708`,
    1358: `711`,
    1359: `711`,
    136: `2`,
    1360: `712`,
    1361: `712`,
    1362: `713`,
    1363: `714`,
    1364: `717`,
    1365: `717`,
    1366: `718`,
    1367: `719`,
    1368: `720`,
    1369: `721`,
    137: `2`,
    1370: `722`,
    1371: `722`,
    1372: `723`,
    1373: `723`,
    1374: `724`,
    1375: `724`,
    1376: `725`,
    1377: `725`,
    1378: `726`,
    1379: `726`,
    138: `2`,
    1380: `727`,
    1381: `727`,
    1382: `728`,
    1383: `728`,
    1384: `729`,
    1385: `729`,
    1386: `729`,
    1387: `731`,
    1388: `731`,
    1389: `731`,
    139: `2`,
    1390: `732`,
    1391: `732`,
    1392: `732`,
    1393: `732`,
    1394: `733`,
    1395: `733`,
    1396: `733`,
    1397: `734`,
    1398: `734`,
    1399: `734`,
    14: `2`,
    140: `2`,
    1400: `735`,
    1401: `735`,
    1402: `736`,
    1403: `736`,
    1404: `736`,
    1405: `738`,
    1406: `738`,
    1407: `738`,
    1408: `739`,
    1409: `739`,
    141: `2`,
    1410: `739`,
    1411: `740`,
    1412: `740`,
    1413: `741`,
    1414: `741`,
    1415: `741`,
    1416: `743`,
    1417: `743`,
    1418: `743`,
    1419: `744`,
    142: `2`,
    1420: `744`,
    1421: `744`,
    1422: `745`,
    1423: `745`,
    1424: `746`,
    1425: `746`,
    1426: `746`,
    1427: `748`,
    1428: `749`,
    1429: `749`,
    143: `2`,
    1430: `750`,
    1431: `751`,
    1432: `752`,
    1433: `752`,
    1434: `753`,
    1435: `753`,
    1436: `754`,
    1437: `755`,
    1438: `756`,
    1439: `757`,
    144: `2`,
    1440: `757`,
    1441: `758`,
    1442: `759`,
    1443: `760`,
    1444: `761`,
    1445: `761`,
    1446: `762`,
    1447: `763`,
    1448: `764`,
    1449: `764`,
    145: `2`,
    1450: `764`,
    1451: `765`,
    1452: `765`,
    1453: `766`,
    1454: `767`,
    1455: `768`,
    1456: `769`,
    1457: `769`,
    1458: `769`,
    1459: `771`,
    146: `2`,
    1460: `771`,
    1461: `771`,
    1462: `773`,
    1463: `773`,
    1464: `774`,
    1465: `774`,
    1466: `775`,
    1467: `775`,
    1468: `776`,
    1469: `777`,
    147: `2`,
    1470: `777`,
    1471: `777`,
    1472: `779`,
    1473: `779`,
    1474: `780`,
    1475: `780`,
    1476: `781`,
    1477: `781`,
    1478: `782`,
    1479: `783`,
    148: `2`,
    1480: `783`,
    1481: `783`,
    1482: `784`,
    1483: `784`,
    1484: `785`,
    1485: `786`,
    1486: `787`,
    1487: `788`,
    1488: `790`,
    1489: `791`,
    149: `2`,
    1490: `791`,
    1491: `792`,
    1492: `793`,
    1493: `794`,
    1494: `794`,
    1495: `795`,
    1496: `796`,
    1497: `796`,
    1498: `796`,
    1499: `797`,
    15: `2`,
    150: `2`,
    1500: `798`,
    1501: `799`,
    1502: `800`,
    1503: `801`,
    1504: `802`,
    1505: `802`,
    1506: `803`,
    1507: `804`,
    1508: `805`,
    1509: `806`,
    151: `2`,
    1510: `807`,
    1511: `808`,
    1512: `809`,
    1513: `809`,
    1514: `810`,
    1515: `811`,
    1516: `812`,
    1517: `813`,
    1518: `814`,
    1519: `815`,
    152: `2`,
    1520: `816`,
    1521: `816`,
    1522: `816`,
    1523: `817`,
    1524: `817`,
    1525: `818`,
    1526: `819`,
    1527: `819`,
    1528: `820`,
    1529: `821`,
    153: `2`,
    1530: `821`,
    1531: `821`,
    1532: `822`,
    1533: `822`,
    1534: `823`,
    1535: `823`,
    1536: `824`,
    1537: `825`,
    1538: `826`,
    1539: `826`,
    154: `2`,
    1540: `827`,
    1541: `828`,
    1542: `828`,
    1543: `829`,
    1544: `830`,
    1545: `831`,
    1546: `832`,
    1547: `833`,
    1548: `834`,
    1549: `834`,
    155: `2`,
    1550: `835`,
    1551: `835`,
    1552: `836`,
    1553: `836`,
    1554: `837`,
    1555: `837`,
    1556: `838`,
    1557: `838`,
    1558: `838`,
    1559: `840`,
    156: `2`,
    1560: `840`,
    1561: `841`,
    1562: `841`,
    1563: `842`,
    1564: `843`,
    1565: `844`,
    1566: `844`,
    1567: `845`,
    1568: `846`,
    1569: `846`,
    157: `2`,
    1570: `847`,
    1571: `848`,
    1572: `849`,
    1573: `850`,
    1574: `851`,
    1575: `852`,
    1576: `852`,
    1577: `853`,
    1578: `853`,
    1579: `854`,
    158: `2`,
    1580: `854`,
    1581: `855`,
    1582: `855`,
    1583: `856`,
    1584: `856`,
    1585: `856`,
    1586: `858`,
    1587: `858`,
    1588: `859`,
    1589: `859`,
    159: `2`,
    1590: `860`,
    1591: `861`,
    1592: `862`,
    1593: `862`,
    1594: `863`,
    1595: `864`,
    1596: `864`,
    1597: `865`,
    1598: `866`,
    1599: `867`,
    16: `2`,
    160: `2`,
    1600: `868`,
    1601: `869`,
    1602: `870`,
    1603: `870`,
    1604: `871`,
    1605: `871`,
    1606: `872`,
    1607: `872`,
    1608: `873`,
    1609: `873`,
    161: `2`,
    1610: `874`,
    1611: `874`,
    1612: `874`,
    1613: `876`,
    1614: `876`,
    1615: `878`,
    1616: `878`,
    1617: `879`,
    1618: `879`,
    1619: `879`,
    162: `2`,
    1620: `881`,
    1621: `881`,
    1622: `882`,
    1623: `882`,
    1624: `883`,
    1625: `884`,
    1626: `886`,
    1627: `886`,
    1628: `886`,
    1629: `888`,
    163: `2`,
    1630: `889`,
    1631: `889`,
    1632: `890`,
    1633: `890`,
    1634: `891`,
    1635: `891`,
    1636: `891`,
    1637: `892`,
    1638: `892`,
    1639: `892`,
    164: `2`,
    1640: `894`,
    1641: `895`,
    1642: `896`,
    1643: `897`,
    1644: `898`,
    1645: `900`,
    1646: `901`,
    1647: `901`,
    1648: `902`,
    1649: `903`,
    165: `2`,
    1650: `903`,
    1651: `904`,
    1652: `904`,
    1653: `905`,
    1654: `905`,
    1655: `906`,
    1656: `907`,
    1657: `909`,
    1658: `909`,
    1659: `909`,
    166: `2`,
    1660: `911`,
    1661: `911`,
    1662: `911`,
    1663: `913`,
    1664: `913`,
    1665: `914`,
    1666: `914`,
    1667: `914`,
    1668: `915`,
    1669: `915`,
    167: `2`,
    1670: `916`,
    1671: `916`,
    1672: `916`,
    1673: `918`,
    1674: `918`,
    1675: `919`,
    1676: `919`,
    1677: `919`,
    1678: `920`,
    1679: `920`,
    168: `2`,
    1680: `921`,
    1681: `921`,
    1682: `921`,
    1683: `924`,
    1684: `925`,
    1685: `926`,
    1686: `927`,
    1687: `927`,
    1688: `928`,
    1689: `929`,
    169: `2`,
    1690: `929`,
    1691: `929`,
    1692: `930`,
    1693: `931`,
    1694: `932`,
    1695: `933`,
    1696: `934`,
    1697: `941`,
    1698: `941`,
    1699: `942`,
    17: `2`,
    170: `2`,
    1700: `942`,
    1701: `942`,
    1702: `943`,
    1703: `944`,
    1704: `945`,
    1705: `952`,
    1706: `952`,
    1707: `953`,
    1708: `953`,
    1709: `953`,
    171: `2`,
    1710: `956`,
    1711: `956`,
    1712: `957`,
    1713: `958`,
    1714: `959`,
    1715: `959`,
    1716: `959`,
    1717: `959`,
    1718: `959`,
    1719: `959`,
    172: `2`,
    1720: `960`,
    1721: `960`,
    1722: `960`,
    1723: `962`,
    1724: `962`,
    1725: `963`,
    1726: `964`,
    1727: `964`,
    1728: `965`,
    1729: `965`,
    173: `2`,
    1730: `965`,
    1731: `967`,
    1732: `967`,
    1733: `968`,
    1734: `968`,
    1735: `968`,
    1736: `969`,
    1737: `969`,
    1738: `970`,
    1739: `970`,
    174: `2`,
    1740: `970`,
    1741: `972`,
    1742: `972`,
    1743: `973`,
    1744: `974`,
    1745: `975`,
    1746: `975`,
    1747: `975`,
    1748: `975`,
    1749: `975`,
    175: `2`,
    1750: `975`,
    1751: `976`,
    1752: `976`,
    1753: `976`,
    1754: `978`,
    1755: `979`,
    1756: `979`,
    1757: `980`,
    1758: `980`,
    1759: `980`,
    176: `2`,
    1760: `982`,
    1761: `982`,
    1762: `983`,
    1763: `984`,
    1764: `985`,
    1765: `985`,
    1766: `986`,
    1767: `986`,
    1768: `986`,
    1769: `988`,
    177: `2`,
    1770: `988`,
    1771: `989`,
    1772: `989`,
    1773: `989`,
    1774: `990`,
    1775: `991`,
    1776: `992`,
    1777: `997`,
    1778: `997`,
    1779: `998`,
    178: `2`,
    1780: `998`,
    1781: `998`,
    1782: `999`,
    1783: `999`,
    1784: `1000`,
    1785: `1000`,
    1786: `1001`,
    1787: `1002`,
    1788: `1002`,
    1789: `1003`,
    179: `2`,
    1790: `1003`,
    1791: `1004`,
    1792: `1005`,
    1793: `1005`,
    1794: `1006`,
    1795: `1007`,
    1796: `1007`,
    1797: `1008`,
    1798: `1009`,
    1799: `1009`,
    18: `2`,
    180: `2`,
    1800: `1009`,
    1801: `1010`,
    1802: `1010`,
    1803: `1011`,
    1804: `1012`,
    1805: `1012`,
    1806: `1013`,
    1807: `1014`,
    1808: `1015`,
    1809: `1015`,
    181: `2`,
    1810: `1016`,
    1811: `1016`,
    1812: `1016`,
    1813: `1017`,
    1814: `1018`,
    1815: `1018`,
    1816: `1019`,
    1817: `1019`,
    1818: `1019`,
    1819: `1020`,
    182: `2`,
    1820: `1021`,
    1821: `1021`,
    1822: `1022`,
    1823: `1022`,
    1824: `1022`,
    1825: `1023`,
    1826: `1024`,
    1827: `1024`,
    1828: `1025`,
    1829: `1025`,
    183: `2`,
    1830: `1025`,
    1831: `1026`,
    1832: `1027`,
    1833: `1027`,
    1834: `1027`,
    1835: `1028`,
    1836: `1028`,
    1837: `1028`,
    1838: `1028`,
    1839: `1028`,
    184: `4`,
    1840: `1028`,
    1841: `1028`,
    1842: `1028`,
    1843: `1028`,
    1844: `1028`,
    1845: `1029`,
    1846: `1029`,
    1847: `1030`,
    1848: `1031`,
    1849: `1032`,
    185: `4`,
    1850: `1033`,
    1851: `1033`,
    1852: `1034`,
    1853: `1035`,
    1854: `1035`,
    1855: `1036`,
    1856: `1036`,
    1857: `1037`,
    1858: `1037`,
    1859: `1038`,
    186: `5`,
    1860: `1039`,
    1861: `1040`,
    1862: `1040`,
    1863: `1041`,
    1864: `1041`,
    1865: `1042`,
    1866: `1042`,
    1867: `1043`,
    1868: `1043`,
    1869: `1044`,
    187: `5`,
    1870: `1044`,
    1871: `1044`,
    1872: `1046`,
    1873: `1046`,
    1874: `1047`,
    1875: `1048`,
    1876: `1048`,
    1877: `1049`,
    1878: `1049`,
    1879: `1049`,
    188: `5`,
    1880: `1051`,
    1881: `1051`,
    1882: `1052`,
    1883: `1052`,
    1884: `1052`,
    1885: `1053`,
    1886: `1053`,
    1887: `1054`,
    1888: `1054`,
    1889: `1054`,
    189: `6`,
    1890: `1056`,
    1891: `1056`,
    1892: `1057`,
    1893: `1057`,
    1894: `1058`,
    1895: `1059`,
    1896: `1059`,
    1897: `1060`,
    1898: `1060`,
    1899: `1061`,
    19: `2`,
    190: `7`,
    1900: `1061`,
    1901: `1062`,
    1902: `1062`,
    1903: `1063`,
    1904: `1064`,
    1905: `1064`,
    1906: `1065`,
    1907: `1066`,
    1908: `1066`,
    1909: `1066`,
    191: `8`,
    1910: `1067`,
    1911: `1067`,
    1912: `1068`,
    1913: `1068`,
    1914: `1069`,
    1915: `1069`,
    1916: `1070`,
    1917: `1071`,
    1918: `1072`,
    1919: `1072`,
    192: `9`,
    1920: `1073`,
    1921: `1073`,
    1922: `1073`,
    1923: `1074`,
    1924: `1075`,
    1925: `1075`,
    1926: `1076`,
    1927: `1076`,
    1928: `1076`,
    1929: `1077`,
    193: `10`,
    1930: `1078`,
    1931: `1078`,
    1932: `1079`,
    1933: `1079`,
    1934: `1079`,
    1935: `1080`,
    1936: `1081`,
    1937: `1081`,
    1938: `1082`,
    1939: `1082`,
    194: `11`,
    1940: `1082`,
    1941: `1083`,
    1942: `1084`,
    1943: `1084`,
    1944: `1084`,
    1945: `1085`,
    1946: `1085`,
    1947: `1085`,
    1948: `1085`,
    1949: `1085`,
    195: `11`,
    1950: `1085`,
    1951: `1085`,
    1952: `1085`,
    1953: `1085`,
    1954: `1085`,
    1955: `1086`,
    1956: `1086`,
    1957: `1087`,
    1958: `1088`,
    1959: `1089`,
    196: `12`,
    1960: `1090`,
    1961: `1090`,
    1962: `1091`,
    1963: `1092`,
    1964: `1092`,
    1965: `1093`,
    1966: `1093`,
    1967: `1094`,
    1968: `1094`,
    1969: `1095`,
    197: `12`,
    1970: `1096`,
    1971: `1097`,
    1972: `1097`,
    1973: `1098`,
    1974: `1098`,
    1975: `1099`,
    1976: `1099`,
    1977: `1100`,
    1978: `1100`,
    1979: `1101`,
    198: `13`,
    1980: `1101`,
    1981: `1101`,
    1982: `1104`,
    1983: `1105`,
    1984: `1106`,
    1985: `1107`,
    1986: `1107`,
    1987: `1108`,
    1988: `1109`,
    1989: `1109`,
    199: `14`,
    1990: `1109`,
    1991: `1110`,
    1992: `1111`,
    1993: `1112`,
    1994: `1113`,
    1995: `1114`,
    1996: `1121`,
    1997: `1121`,
    1998: `1122`,
    1999: `1122`,
    2: `2`,
    20: `2`,
    200: `14`,
    2000: `1122`,
    2001: `1123`,
    2002: `1124`,
    2003: `1125`,
    2004: `1132`,
    2005: `1132`,
    2006: `1133`,
    2007: `1133`,
    2008: `1133`,
    2009: `1136`,
    201: `15`,
    2010: `1136`,
    2011: `1137`,
    2012: `1138`,
    2013: `1139`,
    2014: `1139`,
    2015: `1139`,
    2016: `1139`,
    2017: `1139`,
    2018: `1139`,
    2019: `1140`,
    202: `16`,
    2020: `1140`,
    2021: `1140`,
    2022: `1142`,
    2023: `1142`,
    2024: `1143`,
    2025: `1144`,
    2026: `1144`,
    2027: `1145`,
    2028: `1145`,
    2029: `1145`,
    203: `18`,
    2030: `1147`,
    2031: `1147`,
    2032: `1148`,
    2033: `1148`,
    2034: `1148`,
    2035: `1149`,
    2036: `1149`,
    2037: `1150`,
    2038: `1150`,
    2039: `1150`,
    204: `18`,
    2040: `1152`,
    2041: `1152`,
    2042: `1153`,
    2043: `1154`,
    2044: `1155`,
    2045: `1155`,
    2046: `1155`,
    2047: `1155`,
    2048: `1155`,
    2049: `1155`,
    205: `18`,
    2050: `1156`,
    2051: `1156`,
    2052: `1156`,
    2053: `1158`,
    2054: `1159`,
    2055: `1159`,
    2056: `1160`,
    2057: `1160`,
    2058: `1160`,
    2059: `1162`,
    206: `18`,
    2060: `1162`,
    2061: `1163`,
    2062: `1164`,
    2063: `1165`,
    2064: `1165`,
    2065: `1166`,
    2066: `1166`,
    2067: `1166`,
    2068: `1168`,
    2069: `1168`,
    207: `18`,
    2070: `1169`,
    2071: `1169`,
    2072: `1169`,
    2073: `1170`,
    2074: `1171`,
    2075: `1172`,
    2076: `1177`,
    2077: `1177`,
    2078: `1178`,
    2079: `1178`,
    208: `18`,
    2080: `1178`,
    2081: `1179`,
    2082: `1179`,
    2083: `1180`,
    2084: `1180`,
    2085: `1181`,
    2086: `1182`,
    2087: `1182`,
    2088: `1183`,
    2089: `1183`,
    209: `18`,
    2090: `1184`,
    2091: `1185`,
    2092: `1185`,
    2093: `1186`,
    2094: `1187`,
    2095: `1187`,
    2096: `1188`,
    2097: `1189`,
    2098: `1189`,
    2099: `1189`,
    21: `2`,
    210: `18`,
    2100: `1190`,
    2101: `1190`,
    2102: `1191`,
    2103: `1192`,
    2104: `1192`,
    2105: `1193`,
    2106: `1194`,
    2107: `1194`,
    2108: `1195`,
    2109: `1195`,
    211: `18`,
    2110: `1195`,
    2111: `1196`,
    2112: `1196`,
    2113: `1197`,
    2114: `1197`,
    2115: `1197`,
    2116: `1198`,
    2117: `1199`,
    2118: `1199`,
    2119: `1200`,
    212: `18`,
    2120: `1200`,
    2121: `1200`,
    2122: `1201`,
    2123: `1202`,
    2124: `1203`,
    2125: `1204`,
    2126: `1204`,
    2127: `1205`,
    2128: `1205`,
    2129: `1205`,
    213: `18`,
    2130: `1206`,
    2131: `1207`,
    2132: `1207`,
    2133: `1207`,
    2134: `1208`,
    2135: `1208`,
    2136: `1208`,
    2137: `1208`,
    2138: `1208`,
    2139: `1208`,
    214: `18`,
    2140: `1208`,
    2141: `1208`,
    2142: `1208`,
    2143: `1208`,
    2144: `1209`,
    2145: `1209`,
    2146: `1210`,
    2147: `1211`,
    2148: `1212`,
    2149: `1213`,
    215: `18`,
    2150: `1213`,
    2151: `1214`,
    2152: `1215`,
    2153: `1215`,
    2154: `1216`,
    2155: `1216`,
    2156: `1217`,
    2157: `1217`,
    2158: `1218`,
    2159: `1219`,
    216: `18`,
    2160: `1220`,
    2161: `1220`,
    2162: `1221`,
    2163: `1221`,
    2164: `1222`,
    2165: `1222`,
    2166: `1223`,
    2167: `1223`,
    2168: `1224`,
    2169: `1224`,
    217: `18`,
    2170: `1224`,
    2171: `1226`,
    2172: `1226`,
    2173: `1227`,
    2174: `1228`,
    2175: `1228`,
    2176: `1229`,
    2177: `1229`,
    2178: `1229`,
    2179: `1231`,
    218: `18`,
    2180: `1231`,
    2181: `1232`,
    2182: `1232`,
    2183: `1232`,
    2184: `1233`,
    2185: `1233`,
    2186: `1234`,
    2187: `1234`,
    2188: `1234`,
    2189: `1236`,
    219: `18`,
    2190: `1236`,
    2191: `1237`,
    2192: `1237`,
    2193: `1238`,
    2194: `1239`,
    2195: `1239`,
    2196: `1240`,
    2197: `1240`,
    2198: `1241`,
    2199: `1241`,
    22: `2`,
    220: `18`,
    2200: `1242`,
    2201: `1242`,
    2202: `1243`,
    2203: `1244`,
    2204: `1244`,
    2205: `1245`,
    2206: `1246`,
    2207: `1246`,
    2208: `1246`,
    2209: `1247`,
    221: `18`,
    2210: `1247`,
    2211: `1248`,
    2212: `1248`,
    2213: `1249`,
    2214: `1249`,
    2215: `1250`,
    2216: `1251`,
    2217: `1251`,
    2218: `1252`,
    2219: `1252`,
    222: `18`,
    2220: `1252`,
    2221: `1253`,
    2222: `1253`,
    2223: `1254`,
    2224: `1254`,
    2225: `1254`,
    2226: `1255`,
    2227: `1256`,
    2228: `1256`,
    2229: `1257`,
    223: `18`,
    2230: `1257`,
    2231: `1257`,
    2232: `1258`,
    2233: `1259`,
    2234: `1260`,
    2235: `1261`,
    2236: `1261`,
    2237: `1262`,
    2238: `1262`,
    2239: `1262`,
    224: `18`,
    2240: `1263`,
    2241: `1264`,
    2242: `1264`,
    2243: `1264`,
    2244: `1265`,
    2245: `1265`,
    2246: `1265`,
    2247: `1265`,
    2248: `1265`,
    2249: `1265`,
    225: `18`,
    2250: `1265`,
    2251: `1265`,
    2252: `1265`,
    2253: `1265`,
    2254: `1266`,
    2255: `1266`,
    2256: `1267`,
    2257: `1268`,
    2258: `1269`,
    2259: `1270`,
    226: `18`,
    2260: `1270`,
    2261: `1271`,
    2262: `1272`,
    2263: `1272`,
    2264: `1273`,
    2265: `1273`,
    2266: `1274`,
    2267: `1274`,
    2268: `1275`,
    2269: `1276`,
    227: `18`,
    2270: `1277`,
    2271: `1277`,
    2272: `1278`,
    2273: `1278`,
    2274: `1279`,
    2275: `1279`,
    2276: `1280`,
    2277: `1280`,
    2278: `1281`,
    2279: `1281`,
    228: `18`,
    2280: `1281`,
    2281: `1284`,
    2282: `1285`,
    2283: `1286`,
    2284: `1287`,
    2285: `1287`,
    2286: `1288`,
    2287: `1289`,
    2288: `1289`,
    2289: `1289`,
    229: `18`,
    2290: `1290`,
    2291: `1291`,
    2292: `1292`,
    2293: `1293`,
    2294: `1294`,
    2295: `1301`,
    2296: `1301`,
    2297: `1302`,
    2298: `1309`,
    2299: `1309`,
    23: `2`,
    230: `18`,
    2300: `1310`,
    2301: `1311`,
    2302: `1312`,
    2303: `1313`,
    2304: `1314`,
    2305: `1314`,
    2306: `1315`,
    2307: `1315`,
    2308: `1316`,
    2309: `1317`,
    231: `18`,
    2310: `1318`,
    2311: `1319`,
    2312: `1320`,
    2313: `1327`,
    2314: `1327`,
    2315: `1328`,
    2316: `1329`,
    2317: `1330`,
    2318: `1330`,
    2319: `1330`,
    232: `18`,
    2320: `1330`,
    2321: `1330`,
    2322: `1330`,
    2323: `1331`,
    2324: `1331`,
    2325: `1331`,
    2326: `1333`,
    2327: `1333`,
    2328: `1334`,
    2329: `1335`,
    233: `18`,
    2330: `1335`,
    2331: `1336`,
    2332: `1336`,
    2333: `1336`,
    2334: `1338`,
    2335: `1338`,
    2336: `1339`,
    2337: `1339`,
    2338: `1339`,
    2339: `1340`,
    234: `18`,
    2340: `1340`,
    2341: `1341`,
    2342: `1341`,
    2343: `1341`,
    2344: `1343`,
    2345: `1343`,
    2346: `1344`,
    2347: `1345`,
    2348: `1346`,
    2349: `1346`,
    235: `18`,
    2350: `1346`,
    2351: `1346`,
    2352: `1346`,
    2353: `1346`,
    2354: `1347`,
    2355: `1347`,
    2356: `1347`,
    2357: `1349`,
    2358: `1350`,
    2359: `1350`,
    236: `18`,
    2360: `1351`,
    2361: `1351`,
    2362: `1351`,
    2363: `1353`,
    2364: `1353`,
    2365: `1354`,
    2366: `1355`,
    2367: `1356`,
    2368: `1356`,
    2369: `1357`,
    237: `18`,
    2370: `1357`,
    2371: `1357`,
    2372: `1359`,
    2373: `1359`,
    2374: `1360`,
    2375: `1361`,
    2376: `1362`,
    2377: `1362`,
    2378: `1363`,
    2379: `1363`,
    238: `18`,
    2380: `1364`,
    2381: `1364`,
    2382: `1365`,
    2383: `1366`,
    2384: `1366`,
    2385: `1367`,
    2386: `1367`,
    2387: `1368`,
    2388: `1369`,
    2389: `1370`,
    239: `18`,
    2390: `1370`,
    2391: `1371`,
    2392: `1372`,
    2393: `1373`,
    2394: `1374`,
    2395: `1379`,
    2396: `1379`,
    2397: `1380`,
    2398: `1380`,
    2399: `1380`,
    24: `2`,
    240: `18`,
    2400: `1381`,
    2401: `1382`,
    2402: `1382`,
    2403: `1383`,
    2404: `1383`,
    2405: `1384`,
    2406: `1384`,
    2407: `1384`,
    2408: `1385`,
    2409: `1386`,
    241: `18`,
    2410: `1386`,
    2411: `1387`,
    2412: `1387`,
    2413: `1388`,
    2414: `1388`,
    2415: `1389`,
    2416: `1390`,
    2417: `1390`,
    2418: `1391`,
    2419: `1391`,
    242: `18`,
    2420: `1392`,
    2421: `1392`,
    2422: `1393`,
    2423: `1394`,
    2424: `1394`,
    2425: `1395`,
    2426: `1395`,
    2427: `1396`,
    2428: `1396`,
    2429: `1397`,
    243: `18`,
    2430: `1398`,
    2431: `1398`,
    2432: `1399`,
    2433: `1399`,
    2434: `1400`,
    2435: `1400`,
    2436: `1401`,
    2437: `1401`,
    2438: `1402`,
    2439: `1403`,
    244: `18`,
    2440: `1404`,
    2441: `1404`,
    2442: `1405`,
    2443: `1406`,
    2444: `1407`,
    2445: `1407`,
    2446: `1408`,
    2447: `1408`,
    2448: `1409`,
    2449: `1409`,
    245: `18`,
    2450: `1410`,
    2451: `1411`,
    2452: `1412`,
    2453: `1413`,
    2454: `1414`,
    2455: `1414`,
    2456: `1415`,
    2457: `1416`,
    2458: `1416`,
    2459: `1417`,
    246: `18`,
    2460: `1417`,
    2461: `1418`,
    2462: `1419`,
    2463: `1419`,
    2464: `1420`,
    2465: `1420`,
    2466: `1421`,
    2467: `1422`,
    2468: `1423`,
    2469: `1424`,
    247: `18`,
    2470: `1424`,
    2471: `1425`,
    2472: `1425`,
    2473: `1426`,
    2474: `1427`,
    2475: `1428`,
    2476: `1428`,
    2477: `1429`,
    2478: `1429`,
    2479: `1430`,
    248: `18`,
    2480: `1431`,
    2481: `1432`,
    2482: `1433`,
    2483: `1434`,
    2484: `1434`,
    2485: `1435`,
    2486: `1435`,
    2487: `1436`,
    2488: `1437`,
    2489: `1437`,
    249: `18`,
    2490: `1438`,
    2491: `1439`,
    2492: `1439`,
    2493: `1440`,
    2494: `1440`,
    2495: `1441`,
    2496: `1442`,
    2497: `1443`,
    2498: `1444`,
    2499: `1444`,
    25: `2`,
    250: `18`,
    2500: `1445`,
    2501: `1446`,
    2502: `1447`,
    2503: `1447`,
    2504: `1448`,
    2505: `1448`,
    2506: `1449`,
    2507: `1450`,
    2508: `1450`,
    2509: `1451`,
    251: `18`,
    2510: `1451`,
    2511: `1452`,
    2512: `1452`,
    2513: `1453`,
    2514: `1454`,
    2515: `1455`,
    2516: `1455`,
    2517: `1456`,
    2518: `1456`,
    2519: `1457`,
    252: `18`,
    2520: `1457`,
    2521: `1458`,
    2522: `1459`,
    2523: `1460`,
    2524: `1460`,
    2525: `1461`,
    2526: `1461`,
    2527: `1462`,
    2528: `1463`,
    2529: `1464`,
    253: `18`,
    2530: `1465`,
    2531: `1465`,
    2532: `1466`,
    2533: `1466`,
    2534: `1466`,
    2535: `1467`,
    2536: `1467`,
    2537: `1468`,
    2538: `1469`,
    2539: `1469`,
    254: `18`,
    2540: `1470`,
    2541: `1470`,
    2542: `1471`,
    2543: `1472`,
    2544: `1473`,
    2545: `1473`,
    2546: `1474`,
    2547: `1475`,
    2548: `1475`,
    2549: `1476`,
    255: `18`,
    2550: `1476`,
    2551: `1477`,
    2552: `1477`,
    2553: `1478`,
    2554: `1479`,
    2555: `1479`,
    2556: `1479`,
    2557: `1480`,
    2558: `1480`,
    2559: `1481`,
    256: `18`,
    2560: `1481`,
    2561: `1482`,
    2562: `1482`,
    2563: `1482`,
    2564: `1483`,
    2565: `1483`,
    2566: `1484`,
    2567: `1484`,
    2568: `1485`,
    2569: `1485`,
    257: `18`,
    2570: `1485`,
    2571: `1485`,
    2572: `1485`,
    2573: `1485`,
    2574: `1485`,
    2575: `1485`,
    2576: `1485`,
    2577: `1485`,
    2578: `1486`,
    2579: `1486`,
    258: `18`,
    2580: `1487`,
    2581: `1488`,
    2582: `1489`,
    2583: `1489`,
    2584: `1490`,
    2585: `1490`,
    2586: `1491`,
    2587: `1491`,
    2588: `1492`,
    2589: `1492`,
    259: `18`,
    2590: `1493`,
    2591: `1494`,
    2592: `1494`,
    2593: `1495`,
    2594: `1495`,
    2595: `1496`,
    2596: `1496`,
    2597: `1496`,
    2598: `1497`,
    2599: `1497`,
    26: `2`,
    260: `19`,
    2600: `1498`,
    2601: `1499`,
    2602: `1499`,
    2603: `1500`,
    2604: `1501`,
    2605: `1501`,
    2606: `1501`,
    2607: `1502`,
    2608: `1502`,
    2609: `1503`,
    261: `19`,
    2610: `1504`,
    2611: `1504`,
    2612: `1505`,
    2613: `1506`,
    2614: `1506`,
    2615: `1506`,
    2616: `1507`,
    2617: `1507`,
    2618: `1508`,
    2619: `1509`,
    262: `19`,
    2620: `1510`,
    2621: `1511`,
    2622: `1512`,
    2623: `1513`,
    2624: `1513`,
    2625: `1514`,
    2626: `1515`,
    2627: `1516`,
    2628: `1517`,
    2629: `1518`,
    263: `20`,
    2630: `1519`,
    2631: `1520`,
    2632: `1520`,
    2633: `1521`,
    2634: `1522`,
    2635: `1523`,
    2636: `1524`,
    2637: `1525`,
    2638: `1526`,
    2639: `1526`,
    264: `20`,
    2640: `1527`,
    2641: `1528`,
    2642: `1529`,
    2643: `1530`,
    2644: `1531`,
    2645: `1532`,
    2646: `1532`,
    2647: `1532`,
    2648: `1533`,
    2649: `1533`,
    265: `20`,
    2650: `1534`,
    2651: `1535`,
    2652: `1535`,
    2653: `1536`,
    2654: `1537`,
    2655: `1537`,
    2656: `1537`,
    2657: `1538`,
    2658: `1538`,
    2659: `1539`,
    266: `20`,
    2660: `1540`,
    2661: `1540`,
    2662: `1541`,
    2663: `1541`,
    2664: `1542`,
    2665: `1543`,
    2666: `1544`,
    2667: `1545`,
    2668: `1546`,
    2669: `1547`,
    267: `20`,
    2670: `1547`,
    2671: `1548`,
    2672: `1548`,
    2673: `1549`,
    2674: `1549`,
    2675: `1550`,
    2676: `1550`,
    2677: `1551`,
    2678: `1551`,
    2679: `1552`,
    268: `20`,
    2680: `1552`,
    2681: `1552`,
    2682: `1554`,
    2683: `1554`,
    2684: `1555`,
    2685: `1556`,
    2686: `1556`,
    2687: `1557`,
    2688: `1557`,
    2689: `1557`,
    269: `20`,
    2690: `1559`,
    2691: `1559`,
    2692: `1560`,
    2693: `1560`,
    2694: `1560`,
    2695: `1561`,
    2696: `1561`,
    2697: `1562`,
    2698: `1562`,
    2699: `1562`,
    27: `2`,
    270: `20`,
    2700: `1564`,
    2701: `1564`,
    2702: `1565`,
    2703: `1566`,
    2704: `1567`,
    2705: `1567`,
    2706: `1567`,
    2707: `1568`,
    2708: `1568`,
    2709: `1569`,
    271: `20`,
    2710: `1569`,
    2711: `1570`,
    2712: `1570`,
    2713: `1570`,
    2714: `1570`,
    2715: `1570`,
    2716: `1570`,
    2717: `1570`,
    2718: `1570`,
    2719: `1570`,
    272: `20`,
    2720: `1570`,
    2721: `1571`,
    2722: `1571`,
    2723: `1572`,
    2724: `1573`,
    2725: `1574`,
    2726: `1574`,
    2727: `1575`,
    2728: `1575`,
    2729: `1576`,
    273: `20`,
    2730: `1576`,
    2731: `1577`,
    2732: `1577`,
    2733: `1577`,
    2734: `1578`,
    2735: `1578`,
    2736: `1579`,
    2737: `1580`,
    2738: `1580`,
    2739: `1581`,
    274: `20`,
    2740: `1582`,
    2741: `1582`,
    2742: `1582`,
    2743: `1583`,
    2744: `1583`,
    2745: `1584`,
    2746: `1585`,
    2747: `1585`,
    2748: `1586`,
    2749: `1587`,
    275: `20`,
    2750: `1587`,
    2751: `1587`,
    2752: `1588`,
    2753: `1588`,
    2754: `1589`,
    2755: `1590`,
    2756: `1591`,
    2757: `1592`,
    2758: `1593`,
    2759: `1594`,
    276: `20`,
    2760: `1594`,
    2761: `1595`,
    2762: `1596`,
    2763: `1597`,
    2764: `1598`,
    2765: `1599`,
    2766: `1600`,
    2767: `1601`,
    2768: `1601`,
    2769: `1602`,
    277: `20`,
    2770: `1603`,
    2771: `1604`,
    2772: `1605`,
    2773: `1606`,
    2774: `1607`,
    2775: `1607`,
    2776: `1608`,
    2777: `1609`,
    2778: `1610`,
    2779: `1611`,
    278: `20`,
    2780: `1612`,
    2781: `1613`,
    2782: `1613`,
    2783: `1613`,
    2784: `1614`,
    2785: `1614`,
    2786: `1615`,
    2787: `1616`,
    2788: `1616`,
    2789: `1617`,
    279: `20`,
    2790: `1618`,
    2791: `1618`,
    2792: `1618`,
    2793: `1619`,
    2794: `1620`,
    2795: `1620`,
    2796: `1621`,
    2797: `1621`,
    2798: `1622`,
    2799: `1623`,
    28: `2`,
    280: `20`,
    2800: `1624`,
    2801: `1625`,
    2802: `1626`,
    2803: `1627`,
    2804: `1627`,
    2805: `1628`,
    2806: `1628`,
    2807: `1629`,
    2808: `1629`,
    2809: `1630`,
    281: `20`,
    2810: `1630`,
    2811: `1631`,
    2812: `1631`,
    2813: `1631`,
    2814: `1633`,
    2815: `1633`,
    2816: `1634`,
    2817: `1634`,
    2818: `1635`,
    2819: `1635`,
    282: `20`,
    2820: `1635`,
    2821: `1635`,
    2822: `1635`,
    2823: `1635`,
    2824: `1635`,
    2825: `1635`,
    2826: `1635`,
    2827: `1635`,
    2828: `1636`,
    2829: `1636`,
    283: `20`,
    2830: `1637`,
    2831: `1638`,
    2832: `1639`,
    2833: `1639`,
    2834: `1640`,
    2835: `1640`,
    2836: `1641`,
    2837: `1641`,
    2838: `1642`,
    2839: `1642`,
    284: `20`,
    2840: `1643`,
    2841: `1644`,
    2842: `1644`,
    2843: `1645`,
    2844: `1645`,
    2845: `1646`,
    2846: `1646`,
    2847: `1646`,
    2848: `1647`,
    2849: `1647`,
    285: `20`,
    2850: `1648`,
    2851: `1649`,
    2852: `1649`,
    2853: `1650`,
    2854: `1651`,
    2855: `1651`,
    2856: `1651`,
    2857: `1652`,
    2858: `1652`,
    2859: `1653`,
    286: `20`,
    2860: `1654`,
    2861: `1654`,
    2862: `1655`,
    2863: `1656`,
    2864: `1656`,
    2865: `1656`,
    2866: `1657`,
    2867: `1657`,
    2868: `1658`,
    2869: `1659`,
    287: `22`,
    2870: `1660`,
    2871: `1661`,
    2872: `1662`,
    2873: `1663`,
    2874: `1663`,
    2875: `1664`,
    2876: `1665`,
    2877: `1666`,
    2878: `1667`,
    2879: `1668`,
    288: `24`,
    2880: `1669`,
    2881: `1670`,
    2882: `1670`,
    2883: `1671`,
    2884: `1672`,
    2885: `1673`,
    2886: `1674`,
    2887: `1675`,
    2888: `1676`,
    2889: `1676`,
    289: `24`,
    2890: `1677`,
    2891: `1678`,
    2892: `1679`,
    2893: `1680`,
    2894: `1681`,
    2895: `1682`,
    2896: `1682`,
    2897: `1682`,
    2898: `1683`,
    2899: `1683`,
    29: `2`,
    290: `24`,
    2900: `1684`,
    2901: `1685`,
    2902: `1685`,
    2903: `1686`,
    2904: `1687`,
    2905: `1687`,
    2906: `1687`,
    2907: `1688`,
    2908: `1688`,
    2909: `1689`,
    291: `25`,
    2910: `1690`,
    2911: `1690`,
    2912: `1691`,
    2913: `1691`,
    2914: `1692`,
    2915: `1693`,
    2916: `1694`,
    2917: `1695`,
    2918: `1696`,
    2919: `1697`,
    292: `26`,
    2920: `1697`,
    2921: `1698`,
    2922: `1698`,
    2923: `1699`,
    2924: `1699`,
    2925: `1700`,
    2926: `1700`,
    2927: `1701`,
    2928: `1701`,
    2929: `1702`,
    293: `26`,
    2930: `1702`,
    2931: `1702`,
    2932: `1704`,
    2933: `1704`,
    2934: `1705`,
    2935: `1705`,
    2936: `1706`,
    2937: `1706`,
    2938: `1707`,
    2939: `1708`,
    294: `26`,
    2940: `1708`,
    2941: `1708`,
    2942: `1709`,
    2943: `1709`,
    2944: `1710`,
    2945: `1710`,
    2946: `1711`,
    2947: `1711`,
    2948: `1712`,
    2949: `1713`,
    295: `27`,
    2950: `1713`,
    2951: `1713`,
    2952: `1714`,
    2953: `1714`,
    2954: `1715`,
    2955: `1716`,
    2956: `1717`,
    2957: `1718`,
    2958: `1719`,
    2959: `1719`,
    296: `28`,
    2960: `1720`,
    2961: `1721`,
    2962: `1722`,
    2963: `1723`,
    2964: `1724`,
    2965: `1725`,
    2966: `1725`,
    2967: `1726`,
    2968: `1727`,
    2969: `1728`,
    297: `28`,
    2970: `1729`,
    2971: `1730`,
    2972: `1731`,
    2973: `1732`,
    2974: `1732`,
    2975: `1733`,
    2976: `1734`,
    2977: `1735`,
    2978: `1736`,
    2979: `1737`,
    298: `29`,
    2980: `1738`,
    2981: `1739`,
    2982: `1739`,
    2983: `1739`,
    2984: `1740`,
    2985: `1740`,
    2986: `1741`,
    2987: `1742`,
    2988: `1742`,
    2989: `1743`,
    299: `29`,
    2990: `1744`,
    2991: `1744`,
    2992: `1744`,
    2993: `1745`,
    2994: `1745`,
    2995: `1746`,
    2996: `1747`,
    2997: `1747`,
    2998: `1748`,
    2999: `1748`,
    3: `2`,
    30: `2`,
    300: `31`,
    3000: `1749`,
    3001: `1750`,
    3002: `1751`,
    3003: `1752`,
    3004: `1753`,
    3005: `1754`,
    3006: `1754`,
    3007: `1755`,
    3008: `1755`,
    3009: `1756`,
    301: `31`,
    3010: `1756`,
    3011: `1757`,
    3012: `1757`,
    3013: `1758`,
    3014: `1758`,
    3015: `1759`,
    3016: `1759`,
    3017: `1759`,
    3018: `1761`,
    3019: `1761`,
    302: `32`,
    3020: `1762`,
    3021: `1763`,
    3022: `1763`,
    3023: `1764`,
    3024: `1764`,
    3025: `1765`,
    3026: `1766`,
    3027: `1767`,
    3028: `1768`,
    3029: `1769`,
    303: `33`,
    3030: `1770`,
    3031: `1770`,
    3032: `1771`,
    3033: `1771`,
    3034: `1772`,
    3035: `1772`,
    3036: `1773`,
    3037: `1773`,
    3038: `1774`,
    3039: `1774`,
    304: `34`,
    3040: `1775`,
    3041: `1775`,
    3042: `1775`,
    3043: `1777`,
    3044: `1777`,
    3045: `1778`,
    3046: `1779`,
    3047: `1779`,
    3048: `1780`,
    3049: `1780`,
    305: `34`,
    3050: `1781`,
    3051: `1782`,
    3052: `1783`,
    3053: `1784`,
    3054: `1785`,
    3055: `1786`,
    3056: `1786`,
    3057: `1787`,
    3058: `1787`,
    3059: `1788`,
    306: `35`,
    3060: `1788`,
    3061: `1789`,
    3062: `1789`,
    3063: `1790`,
    3064: `1790`,
    3065: `1791`,
    3066: `1791`,
    3067: `1791`,
    3068: `1793`,
    3069: `1793`,
    307: `36`,
    3070: `1794`,
    3071: `1794`,
    3072: `1795`,
    3073: `1795`,
    3074: `1796`,
    3075: `1797`,
    3076: `1797`,
    3077: `1797`,
    3078: `1798`,
    3079: `1798`,
    308: `36`,
    3080: `1799`,
    3081: `1799`,
    3082: `1800`,
    3083: `1800`,
    3084: `1801`,
    3085: `1802`,
    3086: `1802`,
    3087: `1802`,
    3088: `1803`,
    3089: `1803`,
    309: `37`,
    3090: `1804`,
    3091: `1805`,
    3092: `1806`,
    3093: `1807`,
    3094: `1808`,
    3095: `1808`,
    3096: `1809`,
    3097: `1810`,
    3098: `1811`,
    3099: `1812`,
    31: `2`,
    310: `38`,
    3100: `1813`,
    3101: `1814`,
    3102: `1814`,
    3103: `1815`,
    3104: `1816`,
    3105: `1817`,
    3106: `1818`,
    3107: `1819`,
    3108: `1820`,
    3109: `1821`,
    311: `39`,
    3110: `1821`,
    3111: `1822`,
    3112: `1823`,
    3113: `1824`,
    3114: `1825`,
    3115: `1826`,
    3116: `1827`,
    3117: `1828`,
    3118: `1828`,
    3119: `1828`,
    312: `40`,
    3120: `1829`,
    3121: `1829`,
    3122: `1830`,
    3123: `1831`,
    3124: `1831`,
    3125: `1832`,
    3126: `1833`,
    3127: `1833`,
    3128: `1833`,
    3129: `1834`,
    313: `41`,
    3130: `1834`,
    3131: `1835`,
    3132: `1836`,
    3133: `1836`,
    3134: `1837`,
    3135: `1837`,
    3136: `1838`,
    3137: `1839`,
    3138: `1840`,
    3139: `1841`,
    314: `42`,
    3140: `1842`,
    3141: `1843`,
    3142: `1843`,
    3143: `1844`,
    3144: `1844`,
    3145: `1845`,
    3146: `1845`,
    3147: `1846`,
    3148: `1846`,
    3149: `1847`,
    315: `43`,
    3150: `1847`,
    3151: `1848`,
    3152: `1848`,
    3153: `1848`,
    3154: `1850`,
    3155: `1850`,
    3156: `1851`,
    3157: `1852`,
    3158: `1852`,
    3159: `1853`,
    316: `43`,
    3160: `1853`,
    3161: `1854`,
    3162: `1855`,
    3163: `1856`,
    3164: `1857`,
    3165: `1858`,
    3166: `1859`,
    3167: `1859`,
    3168: `1860`,
    3169: `1860`,
    317: `45`,
    3170: `1861`,
    3171: `1861`,
    3172: `1862`,
    3173: `1862`,
    3174: `1863`,
    3175: `1863`,
    3176: `1864`,
    3177: `1864`,
    3178: `1864`,
    3179: `1866`,
    318: `45`,
    3180: `1866`,
    3181: `1867`,
    3182: `1868`,
    3183: `1868`,
    3184: `1869`,
    3185: `1869`,
    3186: `1870`,
    3187: `1871`,
    3188: `1872`,
    3189: `1873`,
    319: `46`,
    3190: `1874`,
    3191: `1875`,
    3192: `1875`,
    3193: `1876`,
    3194: `1876`,
    3195: `1877`,
    3196: `1877`,
    3197: `1878`,
    3198: `1878`,
    3199: `1879`,
    32: `2`,
    320: `46`,
    3200: `1879`,
    3201: `1880`,
    3202: `1880`,
    3203: `1880`,
    3204: `1882`,
    3205: `1882`,
    3206: `1883`,
    3207: `1883`,
    3208: `1884`,
    3209: `1885`,
    321: `47`,
    3210: `1885`,
    3211: `1885`,
    3212: `1886`,
    3213: `1886`,
    3214: `1887`,
    3215: `1888`,
    3216: `1888`,
    3217: `1889`,
    3218: `1889`,
    3219: `1890`,
    322: `48`,
    3220: `1891`,
    3221: `1892`,
    3222: `1892`,
    3223: `1893`,
    3224: `1893`,
    3225: `1894`,
    3226: `1894`,
    3227: `1895`,
    3228: `1896`,
    3229: `1896`,
    323: `49`,
    3230: `1896`,
    3231: `1897`,
    3232: `1897`,
    3233: `1898`,
    3234: `1898`,
    3235: `1899`,
    3236: `1899`,
    3237: `1899`,
    3238: `1900`,
    3239: `1900`,
    324: `49`,
    3240: `1901`,
    3241: `1901`,
    3242: `1902`,
    3243: `1902`,
    3244: `1902`,
    3245: `1902`,
    3246: `1902`,
    3247: `1902`,
    3248: `1902`,
    3249: `1902`,
    325: `49`,
    3250: `1902`,
    3251: `1902`,
    3252: `1903`,
    3253: `1903`,
    3254: `1904`,
    3255: `1905`,
    3256: `1906`,
    3257: `1906`,
    3258: `1907`,
    3259: `1907`,
    326: `50`,
    3260: `1908`,
    3261: `1908`,
    3262: `1909`,
    3263: `1909`,
    3264: `1910`,
    3265: `1911`,
    3266: `1911`,
    3267: `1912`,
    3268: `1912`,
    3269: `1913`,
    327: `50`,
    3270: `1913`,
    3271: `1913`,
    3272: `1914`,
    3273: `1914`,
    3274: `1915`,
    3275: `1916`,
    3276: `1916`,
    3277: `1917`,
    3278: `1918`,
    3279: `1918`,
    328: `51`,
    3280: `1918`,
    3281: `1919`,
    3282: `1919`,
    3283: `1920`,
    3284: `1921`,
    3285: `1921`,
    3286: `1922`,
    3287: `1923`,
    3288: `1923`,
    3289: `1923`,
    329: `52`,
    3290: `1924`,
    3291: `1924`,
    3292: `1925`,
    3293: `1926`,
    3294: `1927`,
    3295: `1928`,
    3296: `1929`,
    3297: `1930`,
    3298: `1930`,
    3299: `1931`,
    33: `2`,
    330: `53`,
    3300: `1932`,
    3301: `1933`,
    3302: `1934`,
    3303: `1935`,
    3304: `1936`,
    3305: `1937`,
    3306: `1937`,
    3307: `1938`,
    3308: `1939`,
    3309: `1940`,
    331: `53`,
    3310: `1941`,
    3311: `1942`,
    3312: `1943`,
    3313: `1943`,
    3314: `1944`,
    3315: `1945`,
    3316: `1946`,
    3317: `1947`,
    3318: `1948`,
    3319: `1949`,
    332: `54`,
    3320: `1949`,
    3321: `1949`,
    3322: `1950`,
    3323: `1950`,
    3324: `1951`,
    3325: `1952`,
    3326: `1952`,
    3327: `1953`,
    3328: `1954`,
    3329: `1954`,
    333: `54`,
    3330: `1954`,
    3331: `1955`,
    3332: `1955`,
    3333: `1956`,
    3334: `1957`,
    3335: `1957`,
    3336: `1958`,
    3337: `1958`,
    3338: `1959`,
    3339: `1960`,
    334: `55`,
    3340: `1961`,
    3341: `1962`,
    3342: `1963`,
    3343: `1964`,
    3344: `1964`,
    3345: `1965`,
    3346: `1965`,
    3347: `1966`,
    3348: `1966`,
    3349: `1967`,
    335: `55`,
    3350: `1967`,
    3351: `1968`,
    3352: `1968`,
    3353: `1969`,
    3354: `1969`,
    3355: `1969`,
    3356: `1971`,
    3357: `1971`,
    3358: `1972`,
    3359: `1972`,
    336: `55`,
    3360: `1973`,
    3361: `1973`,
    3362: `1974`,
    3363: `1975`,
    3364: `1975`,
    3365: `1975`,
    3366: `1976`,
    3367: `1976`,
    3368: `1977`,
    3369: `1977`,
    337: `56`,
    3370: `1978`,
    3371: `1978`,
    3372: `1979`,
    3373: `1980`,
    3374: `1980`,
    3375: `1980`,
    3376: `1981`,
    3377: `1981`,
    3378: `1982`,
    3379: `1983`,
    338: `56`,
    3380: `1984`,
    3381: `1985`,
    3382: `1986`,
    3383: `1986`,
    3384: `1987`,
    3385: `1988`,
    3386: `1989`,
    3387: `1990`,
    3388: `1991`,
    3389: `1992`,
    339: `57`,
    3390: `1992`,
    3391: `1993`,
    3392: `1994`,
    3393: `1995`,
    3394: `1996`,
    3395: `1997`,
    3396: `1998`,
    3397: `1999`,
    3398: `1999`,
    3399: `2000`,
    34: `2`,
    340: `57`,
    3400: `2001`,
    3401: `2002`,
    3402: `2003`,
    3403: `2004`,
    3404: `2005`,
    3405: `2006`,
    3406: `2006`,
    3407: `2006`,
    3408: `2007`,
    3409: `2007`,
    341: `57`,
    3410: `2008`,
    3411: `2009`,
    3412: `2009`,
    3413: `2010`,
    3414: `2011`,
    3415: `2011`,
    3416: `2011`,
    3417: `2012`,
    3418: `2013`,
    3419: `2013`,
    342: `57`,
    3420: `2014`,
    3421: `2014`,
    3422: `2015`,
    3423: `2016`,
    3424: `2017`,
    3425: `2018`,
    3426: `2019`,
    3427: `2020`,
    3428: `2020`,
    3429: `2021`,
    343: `57`,
    3430: `2021`,
    3431: `2022`,
    3432: `2022`,
    3433: `2023`,
    3434: `2023`,
    3435: `2024`,
    3436: `2024`,
    3437: `2024`,
    3438: `2026`,
    3439: `2027`,
    344: `57`,
    3440: `2027`,
    3441: `2028`,
    3442: `2028`,
    3443: `2029`,
    3444: `2030`,
    3445: `2031`,
    3446: `2032`,
    3447: `2033`,
    3448: `2034`,
    3449: `2034`,
    345: `58`,
    3450: `2035`,
    3451: `2035`,
    3452: `2036`,
    3453: `2036`,
    3454: `2037`,
    3455: `2037`,
    3456: `2038`,
    3457: `2038`,
    3458: `2038`,
    3459: `2040`,
    346: `58`,
    3460: `2041`,
    3461: `2041`,
    3462: `2042`,
    3463: `2042`,
    3464: `2043`,
    3465: `2044`,
    3466: `2045`,
    3467: `2046`,
    3468: `2047`,
    3469: `2048`,
    347: `59`,
    3470: `2048`,
    3471: `2049`,
    3472: `2049`,
    3473: `2050`,
    3474: `2050`,
    3475: `2051`,
    3476: `2051`,
    3477: `2052`,
    3478: `2052`,
    3479: `2052`,
    348: `60`,
    3480: `2054`,
    3481: `2054`,
    3482: `2055`,
    3483: `2055`,
    3484: `2056`,
    3485: `2057`,
    3486: `2057`,
    3487: `2057`,
    3488: `2058`,
    3489: `2058`,
    349: `61`,
    3490: `2059`,
    3491: `2060`,
    3492: `2061`,
    3493: `2062`,
    3494: `2063`,
    3495: `2063`,
    3496: `2064`,
    3497: `2064`,
    3498: `2065`,
    3499: `2065`,
    35: `2`,
    350: `61`,
    3500: `2066`,
    3501: `2067`,
    3502: `2067`,
    3503: `2067`,
    3504: `2068`,
    3505: `2068`,
    3506: `2069`,
    3507: `2069`,
    3508: `2070`,
    3509: `2070`,
    351: `62`,
    3510: `2070`,
    3511: `2071`,
    3512: `2071`,
    3513: `2072`,
    3514: `2072`,
    3515: `2073`,
    3516: `2073`,
    3517: `2073`,
    3518: `2073`,
    3519: `2073`,
    352: `63`,
    3520: `2073`,
    3521: `2073`,
    3522: `2073`,
    3523: `2073`,
    3524: `2073`,
    3525: `2074`,
    3526: `2074`,
    3527: `2075`,
    3528: `2076`,
    3529: `2077`,
    353: `65`,
    3530: `2077`,
    3531: `2078`,
    3532: `2078`,
    3533: `2079`,
    3534: `2079`,
    3535: `2080`,
    3536: `2080`,
    3537: `2081`,
    3538: `2082`,
    3539: `2082`,
    354: `65`,
    3540: `2083`,
    3541: `2083`,
    3542: `2084`,
    3543: `2084`,
    3544: `2084`,
    3545: `2085`,
    3546: `2085`,
    3547: `2086`,
    3548: `2087`,
    3549: `2087`,
    355: `66`,
    3550: `2088`,
    3551: `2089`,
    3552: `2089`,
    3553: `2089`,
    3554: `2090`,
    3555: `2090`,
    3556: `2091`,
    3557: `2092`,
    3558: `2092`,
    3559: `2093`,
    356: `66`,
    3560: `2094`,
    3561: `2094`,
    3562: `2094`,
    3563: `2095`,
    3564: `2095`,
    3565: `2096`,
    3566: `2097`,
    3567: `2098`,
    3568: `2099`,
    3569: `2100`,
    357: `66`,
    3570: `2101`,
    3571: `2101`,
    3572: `2102`,
    3573: `2103`,
    3574: `2104`,
    3575: `2105`,
    3576: `2106`,
    3577: `2107`,
    3578: `2108`,
    3579: `2108`,
    358: `67`,
    3580: `2109`,
    3581: `2110`,
    3582: `2111`,
    3583: `2112`,
    3584: `2113`,
    3585: `2114`,
    3586: `2114`,
    3587: `2115`,
    3588: `2116`,
    3589: `2117`,
    359: `67`,
    3590: `2118`,
    3591: `2119`,
    3592: `2120`,
    3593: `2120`,
    3594: `2120`,
    3595: `2121`,
    3596: `2121`,
    3597: `2122`,
    3598: `2123`,
    3599: `2123`,
    36: `2`,
    360: `68`,
    3600: `2124`,
    3601: `2125`,
    3602: `2125`,
    3603: `2125`,
    3604: `2126`,
    3605: `2126`,
    3606: `2127`,
    3607: `2128`,
    3608: `2128`,
    3609: `2129`,
    361: `69`,
    3610: `2129`,
    3611: `2130`,
    3612: `2131`,
    3613: `2132`,
    3614: `2133`,
    3615: `2134`,
    3616: `2135`,
    3617: `2135`,
    3618: `2136`,
    3619: `2136`,
    362: `70`,
    3620: `2137`,
    3621: `2137`,
    3622: `2138`,
    3623: `2138`,
    3624: `2139`,
    3625: `2139`,
    3626: `2140`,
    3627: `2140`,
    3628: `2140`,
    3629: `2142`,
    363: `70`,
    3630: `2142`,
    3631: `2143`,
    3632: `2143`,
    3633: `2144`,
    3634: `2144`,
    3635: `2144`,
    3636: `2144`,
    3637: `2144`,
    3638: `2144`,
    3639: `2144`,
    364: `70`,
    3640: `2144`,
    3641: `2144`,
    3642: `2144`,
    3643: `2145`,
    3644: `2145`,
    3645: `2146`,
    3646: `2147`,
    3647: `2148`,
    3648: `2148`,
    3649: `2149`,
    365: `70`,
    3650: `2149`,
    3651: `2150`,
    3652: `2150`,
    3653: `2151`,
    3654: `2151`,
    3655: `2152`,
    3656: `2153`,
    3657: `2153`,
    3658: `2154`,
    3659: `2154`,
    366: `70`,
    3660: `2155`,
    3661: `2155`,
    3662: `2155`,
    3663: `2156`,
    3664: `2156`,
    3665: `2157`,
    3666: `2158`,
    3667: `2158`,
    3668: `2159`,
    3669: `2160`,
    367: `70`,
    3670: `2160`,
    3671: `2160`,
    3672: `2161`,
    3673: `2161`,
    3674: `2162`,
    3675: `2163`,
    3676: `2163`,
    3677: `2164`,
    3678: `2165`,
    3679: `2165`,
    368: `70`,
    3680: `2165`,
    3681: `2166`,
    3682: `2166`,
    3683: `2167`,
    3684: `2168`,
    3685: `2169`,
    3686: `2170`,
    3687: `2171`,
    3688: `2172`,
    3689: `2172`,
    369: `70`,
    3690: `2173`,
    3691: `2174`,
    3692: `2175`,
    3693: `2176`,
    3694: `2177`,
    3695: `2178`,
    3696: `2179`,
    3697: `2179`,
    3698: `2180`,
    3699: `2181`,
    37: `2`,
    370: `70`,
    3700: `2182`,
    3701: `2183`,
    3702: `2184`,
    3703: `2185`,
    3704: `2185`,
    3705: `2186`,
    3706: `2187`,
    3707: `2188`,
    3708: `2189`,
    3709: `2190`,
    371: `70`,
    3710: `2191`,
    3711: `2191`,
    3712: `2191`,
    3713: `2192`,
    3714: `2192`,
    3715: `2193`,
    3716: `2194`,
    3717: `2194`,
    3718: `2195`,
    3719: `2196`,
    372: `70`,
    3720: `2196`,
    3721: `2196`,
    3722: `2197`,
    3723: `2197`,
    3724: `2198`,
    3725: `2199`,
    3726: `2199`,
    3727: `2200`,
    3728: `2200`,
    3729: `2201`,
    373: `70`,
    3730: `2202`,
    3731: `2203`,
    3732: `2204`,
    3733: `2205`,
    3734: `2206`,
    3735: `2206`,
    3736: `2207`,
    3737: `2207`,
    3738: `2208`,
    3739: `2208`,
    374: `70`,
    3740: `2209`,
    3741: `2209`,
    3742: `2210`,
    3743: `2210`,
    3744: `2211`,
    3745: `2211`,
    3746: `2211`,
    3747: `2213`,
    3748: `2213`,
    3749: `2214`,
    375: `70`,
    3750: `2214`,
    3751: `2215`,
    3752: `2215`,
    3753: `2216`,
    3754: `2217`,
    3755: `2217`,
    3756: `2217`,
    3757: `2218`,
    3758: `2218`,
    3759: `2219`,
    376: `70`,
    3760: `2219`,
    3761: `2220`,
    3762: `2220`,
    3763: `2221`,
    3764: `2222`,
    3765: `2222`,
    3766: `2222`,
    3767: `2223`,
    3768: `2223`,
    3769: `2224`,
    377: `70`,
    3770: `2225`,
    3771: `2226`,
    3772: `2227`,
    3773: `2228`,
    3774: `2228`,
    3775: `2229`,
    3776: `2230`,
    3777: `2231`,
    3778: `2232`,
    3779: `2233`,
    378: `71`,
    3780: `2234`,
    3781: `2234`,
    3782: `2235`,
    3783: `2236`,
    3784: `2237`,
    3785: `2238`,
    3786: `2239`,
    3787: `2240`,
    3788: `2241`,
    3789: `2241`,
    379: `71`,
    3790: `2242`,
    3791: `2243`,
    3792: `2244`,
    3793: `2245`,
    3794: `2246`,
    3795: `2247`,
    3796: `2248`,
    3797: `2248`,
    3798: `2248`,
    3799: `2249`,
    38: `2`,
    380: `71`,
    3800: `2249`,
    3801: `2250`,
    3802: `2251`,
    3803: `2251`,
    3804: `2252`,
    3805: `2253`,
    3806: `2253`,
    3807: `2253`,
    3808: `2254`,
    3809: `2254`,
    381: `73`,
    3810: `2255`,
    3811: `2256`,
    3812: `2256`,
    3813: `2257`,
    3814: `2257`,
    3815: `2258`,
    3816: `2259`,
    3817: `2260`,
    3818: `2261`,
    3819: `2262`,
    382: `73`,
    3820: `2263`,
    3821: `2263`,
    3822: `2264`,
    3823: `2264`,
    3824: `2265`,
    3825: `2265`,
    3826: `2266`,
    3827: `2266`,
    3828: `2267`,
    3829: `2267`,
    383: `73`,
    3830: `2268`,
    3831: `2268`,
    3832: `2268`,
    3833: `2270`,
    3834: `2270`,
    3835: `2271`,
    3836: `2272`,
    3837: `2272`,
    3838: `2273`,
    3839: `2273`,
    384: `74`,
    3840: `2274`,
    3841: `2275`,
    3842: `2276`,
    3843: `2277`,
    3844: `2278`,
    3845: `2279`,
    3846: `2279`,
    3847: `2280`,
    3848: `2280`,
    3849: `2281`,
    385: `75`,
    3850: `2281`,
    3851: `2282`,
    3852: `2282`,
    3853: `2283`,
    3854: `2283`,
    3855: `2284`,
    3856: `2284`,
    3857: `2284`,
    3858: `2286`,
    3859: `2286`,
    386: `75`,
    3860: `2287`,
    3861: `2288`,
    3862: `2288`,
    3863: `2289`,
    3864: `2289`,
    3865: `2290`,
    3866: `2291`,
    3867: `2292`,
    3868: `2293`,
    3869: `2294`,
    387: `77`,
    3870: `2295`,
    3871: `2295`,
    3872: `2296`,
    3873: `2296`,
    3874: `2297`,
    3875: `2297`,
    3876: `2298`,
    3877: `2298`,
    3878: `2299`,
    3879: `2299`,
    388: `77`,
    3880: `2300`,
    3881: `2300`,
    3882: `2300`,
    3883: `2302`,
    3884: `2302`,
    3885: `2303`,
    3886: `2303`,
    3887: `2304`,
    3888: `2304`,
    3889: `2305`,
    389: `78`,
    3890: `2306`,
    3891: `2306`,
    3892: `2306`,
    3893: `2307`,
    3894: `2307`,
    3895: `2308`,
    3896: `2308`,
    3897: `2309`,
    3898: `2309`,
    3899: `2310`,
    39: `2`,
    390: `79`,
    3900: `2311`,
    3901: `2311`,
    3902: `2311`,
    3903: `2312`,
    3904: `2312`,
    3905: `2313`,
    3906: `2314`,
    3907: `2315`,
    3908: `2316`,
    3909: `2317`,
    391: `80`,
    3910: `2317`,
    3911: `2318`,
    3912: `2319`,
    3913: `2320`,
    3914: `2321`,
    3915: `2322`,
    3916: `2323`,
    3917: `2323`,
    3918: `2324`,
    3919: `2325`,
    392: `80`,
    3920: `2326`,
    3921: `2327`,
    3922: `2328`,
    3923: `2329`,
    3924: `2330`,
    3925: `2330`,
    3926: `2331`,
    3927: `2332`,
    3928: `2333`,
    3929: `2334`,
    393: `81`,
    3930: `2335`,
    3931: `2336`,
    3932: `2337`,
    3933: `2337`,
    3934: `2337`,
    3935: `2338`,
    3936: `2338`,
    3937: `2339`,
    3938: `2340`,
    3939: `2340`,
    394: `82`,
    3940: `2341`,
    3941: `2342`,
    3942: `2342`,
    3943: `2342`,
    3944: `2343`,
    3945: `2343`,
    3946: `2344`,
    3947: `2345`,
    3948: `2345`,
    3949: `2346`,
    395: `82`,
    3950: `2346`,
    3951: `2347`,
    3952: `2348`,
    3953: `2349`,
    3954: `2350`,
    3955: `2351`,
    3956: `2352`,
    3957: `2352`,
    3958: `2353`,
    3959: `2353`,
    396: `82`,
    3960: `2354`,
    3961: `2354`,
    3962: `2355`,
    3963: `2355`,
    3964: `2356`,
    3965: `2356`,
    3966: `2357`,
    3967: `2357`,
    3968: `2357`,
    3969: `2359`,
    397: `83`,
    3970: `2359`,
    3971: `2360`,
    3972: `2361`,
    3973: `2361`,
    3974: `2362`,
    3975: `2362`,
    3976: `2363`,
    3977: `2364`,
    3978: `2365`,
    3979: `2366`,
    398: `84`,
    3980: `2367`,
    3981: `2368`,
    3982: `2368`,
    3983: `2369`,
    3984: `2369`,
    3985: `2370`,
    3986: `2370`,
    3987: `2371`,
    3988: `2371`,
    3989: `2372`,
    399: `84`,
    3990: `2372`,
    3991: `2373`,
    3992: `2373`,
    3993: `2373`,
    3994: `2375`,
    3995: `2375`,
    3996: `2376`,
    3997: `2377`,
    3998: `2377`,
    3999: `2378`,
    4: `2`,
    40: `2`,
    400: `85`,
    4000: `2378`,
    4001: `2379`,
    4002: `2380`,
    4003: `2381`,
    4004: `2382`,
    4005: `2383`,
    4006: `2384`,
    4007: `2384`,
    4008: `2385`,
    4009: `2385`,
    401: `86`,
    4010: `2386`,
    4011: `2386`,
    4012: `2387`,
    4013: `2387`,
    4014: `2388`,
    4015: `2388`,
    4016: `2389`,
    4017: `2389`,
    4018: `2389`,
    4019: `2391`,
    402: `87`,
    4020: `2391`,
    4021: `2392`,
    4022: `2392`,
    4023: `2393`,
    4024: `2394`,
    4025: `2394`,
    4026: `2394`,
    4027: `2395`,
    4028: `2395`,
    4029: `2396`,
    403: `88`,
    4030: `2396`,
    4031: `2397`,
    4032: `2397`,
    4033: `2397`,
    4034: `2398`,
    4035: `2398`,
    4036: `2399`,
    4037: `2399`,
    4038: `2400`,
    4039: `2400`,
    404: `88`,
    4040: `2400`,
    4041: `2400`,
    4042: `2400`,
    4043: `2400`,
    4044: `2400`,
    4045: `2400`,
    4046: `2400`,
    4047: `2400`,
    4048: `2401`,
    4049: `2401`,
    405: `89`,
    4050: `2402`,
    4051: `2403`,
    4052: `2404`,
    4053: `2404`,
    4054: `2405`,
    4055: `2405`,
    4056: `2406`,
    4057: `2406`,
    4058: `2407`,
    4059: `2407`,
    406: `89`,
    4060: `2408`,
    4061: `2409`,
    4062: `2409`,
    4063: `2410`,
    4064: `2410`,
    4065: `2411`,
    4066: `2411`,
    4067: `2411`,
    4068: `2412`,
    4069: `2412`,
    407: `89`,
    4070: `2413`,
    4071: `2414`,
    4072: `2414`,
    4073: `2415`,
    4074: `2416`,
    4075: `2416`,
    4076: `2416`,
    4077: `2417`,
    4078: `2417`,
    4079: `2418`,
    408: `91`,
    4080: `2419`,
    4081: `2419`,
    4082: `2420`,
    4083: `2421`,
    4084: `2421`,
    4085: `2421`,
    4086: `2422`,
    4087: `2422`,
    4088: `2423`,
    4089: `2424`,
    409: `91`,
    4090: `2425`,
    4091: `2426`,
    4092: `2427`,
    4093: `2428`,
    4094: `2428`,
    4095: `2429`,
    4096: `2430`,
    4097: `2431`,
    4098: `2432`,
    4099: `2433`,
    41: `2`,
    410: `91`,
    4100: `2434`,
    4101: `2435`,
    4102: `2435`,
    4103: `2436`,
    4104: `2437`,
    4105: `2438`,
    4106: `2439`,
    4107: `2440`,
    4108: `2441`,
    4109: `2441`,
    411: `92`,
    4110: `2442`,
    4111: `2443`,
    4112: `2444`,
    4113: `2445`,
    4114: `2446`,
    4115: `2447`,
    4116: `2447`,
    4117: `2447`,
    4118: `2448`,
    4119: `2448`,
    412: `93`,
    4120: `2449`,
    4121: `2450`,
    4122: `2450`,
    4123: `2451`,
    4124: `2452`,
    4125: `2452`,
    4126: `2452`,
    4127: `2453`,
    4128: `2453`,
    4129: `2454`,
    413: `93`,
    4130: `2455`,
    4131: `2455`,
    4132: `2456`,
    4133: `2456`,
    4134: `2457`,
    4135: `2458`,
    4136: `2459`,
    4137: `2460`,
    4138: `2461`,
    4139: `2462`,
    414: `95`,
    4140: `2462`,
    4141: `2463`,
    4142: `2463`,
    4143: `2464`,
    4144: `2464`,
    4145: `2465`,
    4146: `2465`,
    4147: `2466`,
    4148: `2466`,
    4149: `2467`,
    415: `95`,
    4150: `2467`,
    4151: `2467`,
    4152: `2469`,
    4153: `2469`,
    4154: `2470`,
    4155: `2470`,
    4156: `2471`,
    4157: `2471`,
    4158: `2471`,
    4159: `2471`,
    416: `96`,
    4160: `2471`,
    4161: `2471`,
    4162: `2471`,
    4163: `2471`,
    4164: `2471`,
    4165: `2471`,
    4166: `2472`,
    4167: `2472`,
    4168: `2473`,
    4169: `2474`,
    417: `97`,
    4170: `2475`,
    4171: `2475`,
    4172: `2476`,
    4173: `2476`,
    4174: `2477`,
    4175: `2477`,
    4176: `2478`,
    4177: `2478`,
    4178: `2479`,
    4179: `2480`,
    418: `97`,
    4180: `2480`,
    4181: `2481`,
    4182: `2481`,
    4183: `2482`,
    4184: `2482`,
    4185: `2482`,
    4186: `2483`,
    4187: `2483`,
    4188: `2484`,
    4189: `2485`,
    419: `98`,
    4190: `2485`,
    4191: `2486`,
    4192: `2487`,
    4193: `2487`,
    4194: `2487`,
    4195: `2488`,
    4196: `2488`,
    4197: `2489`,
    4198: `2490`,
    4199: `2490`,
    42: `2`,
    420: `98`,
    4200: `2491`,
    4201: `2492`,
    4202: `2492`,
    4203: `2492`,
    4204: `2493`,
    4205: `2493`,
    4206: `2494`,
    4207: `2495`,
    4208: `2496`,
    4209: `2497`,
    421: `99`,
    4210: `2498`,
    4211: `2499`,
    4212: `2499`,
    4213: `2500`,
    4214: `2501`,
    4215: `2502`,
    4216: `2503`,
    4217: `2504`,
    4218: `2505`,
    4219: `2506`,
    422: `100`,
    4220: `2506`,
    4221: `2507`,
    4222: `2508`,
    4223: `2509`,
    4224: `2510`,
    4225: `2511`,
    4226: `2512`,
    4227: `2512`,
    4228: `2513`,
    4229: `2514`,
    423: `100`,
    4230: `2515`,
    4231: `2516`,
    4232: `2517`,
    4233: `2518`,
    4234: `2518`,
    4235: `2518`,
    4236: `2519`,
    4237: `2519`,
    4238: `2520`,
    4239: `2521`,
    424: `100`,
    4240: `2521`,
    4241: `2522`,
    4242: `2523`,
    4243: `2523`,
    4244: `2523`,
    4245: `2524`,
    4246: `2524`,
    4247: `2525`,
    4248: `2526`,
    4249: `2526`,
    425: `101`,
    4250: `2527`,
    4251: `2527`,
    4252: `2528`,
    4253: `2529`,
    4254: `2530`,
    4255: `2531`,
    4256: `2532`,
    4257: `2533`,
    4258: `2533`,
    4259: `2534`,
    426: `102`,
    4260: `2534`,
    4261: `2535`,
    4262: `2535`,
    4263: `2536`,
    4264: `2536`,
    4265: `2537`,
    4266: `2537`,
    4267: `2538`,
    4268: `2538`,
    4269: `2538`,
    427: `102`,
    4270: `2540`,
    4271: `2540`,
    4272: `2541`,
    4273: `2541`,
    4274: `2542`,
    4275: `2542`,
    4276: `2543`,
    4277: `2544`,
    4278: `2544`,
    4279: `2544`,
    428: `103`,
    4280: `2545`,
    4281: `2545`,
    4282: `2546`,
    4283: `2546`,
    4284: `2547`,
    4285: `2547`,
    4286: `2548`,
    4287: `2549`,
    4288: `2549`,
    4289: `2549`,
    429: `104`,
    4290: `2550`,
    4291: `2550`,
    4292: `2551`,
    4293: `2552`,
    4294: `2553`,
    4295: `2554`,
    4296: `2555`,
    4297: `2555`,
    4298: `2556`,
    4299: `2557`,
    43: `2`,
    430: `105`,
    4300: `2558`,
    4301: `2559`,
    4302: `2560`,
    4303: `2561`,
    4304: `2561`,
    4305: `2562`,
    4306: `2563`,
    4307: `2564`,
    4308: `2565`,
    4309: `2566`,
    431: `106`,
    4310: `2567`,
    4311: `2568`,
    4312: `2568`,
    4313: `2569`,
    4314: `2570`,
    4315: `2571`,
    4316: `2572`,
    4317: `2573`,
    4318: `2574`,
    4319: `2575`,
    432: `106`,
    4320: `2575`,
    4321: `2575`,
    4322: `2576`,
    4323: `2576`,
    4324: `2577`,
    4325: `2578`,
    4326: `2578`,
    4327: `2579`,
    4328: `2580`,
    4329: `2580`,
    433: `107`,
    4330: `2580`,
    4331: `2581`,
    4332: `2581`,
    4333: `2582`,
    4334: `2583`,
    4335: `2583`,
    4336: `2584`,
    4337: `2584`,
    4338: `2585`,
    4339: `2586`,
    434: `107`,
    4340: `2587`,
    4341: `2588`,
    4342: `2589`,
    4343: `2590`,
    4344: `2590`,
    4345: `2591`,
    4346: `2591`,
    4347: `2592`,
    4348: `2592`,
    4349: `2593`,
    435: `107`,
    4350: `2593`,
    4351: `2594`,
    4352: `2594`,
    4353: `2595`,
    4354: `2595`,
    4355: `2595`,
    4356: `2597`,
    4357: `2597`,
    4358: `2598`,
    4359: `2599`,
    436: `109`,
    4360: `2599`,
    4361: `2600`,
    4362: `2600`,
    4363: `2601`,
    4364: `2602`,
    4365: `2603`,
    4366: `2604`,
    4367: `2605`,
    4368: `2606`,
    4369: `2606`,
    437: `109`,
    4370: `2607`,
    4371: `2607`,
    4372: `2608`,
    4373: `2608`,
    4374: `2609`,
    4375: `2609`,
    4376: `2610`,
    4377: `2610`,
    4378: `2611`,
    4379: `2611`,
    438: `109`,
    4380: `2611`,
    4381: `2613`,
    4382: `2613`,
    4383: `2614`,
    4384: `2615`,
    4385: `2615`,
    4386: `2616`,
    4387: `2616`,
    4388: `2617`,
    4389: `2618`,
    439: `110`,
    4390: `2619`,
    4391: `2620`,
    4392: `2621`,
    4393: `2622`,
    4394: `2622`,
    4395: `2623`,
    4396: `2623`,
    4397: `2624`,
    4398: `2624`,
    4399: `2625`,
    44: `2`,
    440: `111`,
    4400: `2625`,
    4401: `2626`,
    4402: `2626`,
    4403: `2627`,
    4404: `2627`,
    4405: `2627`,
    4406: `2629`,
    4407: `2629`,
    4408: `2630`,
    4409: `2630`,
    441: `111`,
    4410: `2631`,
    4411: `2631`,
    4412: `2632`,
    4413: `2633`,
    4414: `2633`,
    4415: `2633`,
    4416: `2634`,
    4417: `2634`,
    4418: `2635`,
    4419: `2635`,
    442: `113`,
    4420: `2636`,
    4421: `2636`,
    4422: `2637`,
    4423: `2638`,
    4424: `2638`,
    4425: `2638`,
    4426: `2639`,
    4427: `2639`,
    4428: `2640`,
    4429: `2641`,
    443: `113`,
    4430: `2642`,
    4431: `2643`,
    4432: `2644`,
    4433: `2644`,
    4434: `2645`,
    4435: `2646`,
    4436: `2647`,
    4437: `2648`,
    4438: `2649`,
    4439: `2650`,
    444: `114`,
    4440: `2650`,
    4441: `2651`,
    4442: `2652`,
    4443: `2653`,
    4444: `2654`,
    4445: `2655`,
    4446: `2656`,
    4447: `2657`,
    4448: `2657`,
    4449: `2658`,
    445: `115`,
    4450: `2659`,
    4451: `2660`,
    4452: `2661`,
    4453: `2662`,
    4454: `2663`,
    4455: `2664`,
    4456: `2664`,
    4457: `2664`,
    4458: `2665`,
    4459: `2665`,
    446: `116`,
    4460: `2666`,
    4461: `2667`,
    4462: `2667`,
    4463: `2668`,
    4464: `2669`,
    4465: `2669`,
    4466: `2669`,
    4467: `2670`,
    4468: `2670`,
    4469: `2671`,
    447: `116`,
    4470: `2672`,
    4471: `2672`,
    4472: `2673`,
    4473: `2673`,
    4474: `2674`,
    4475: `2675`,
    4476: `2676`,
    4477: `2677`,
    4478: `2678`,
    4479: `2679`,
    448: `117`,
    4480: `2679`,
    4481: `2680`,
    4482: `2680`,
    4483: `2681`,
    4484: `2681`,
    4485: `2682`,
    4486: `2682`,
    4487: `2683`,
    4488: `2683`,
    4489: `2684`,
    449: `118`,
    4490: `2684`,
    4491: `2684`,
    4492: `2686`,
    4493: `2686`,
    4494: `2687`,
    4495: `2688`,
    4496: `2688`,
    4497: `2689`,
    4498: `2689`,
    4499: `2690`,
    45: `2`,
    450: `118`,
    4500: `2691`,
    4501: `2692`,
    4502: `2693`,
    4503: `2694`,
    4504: `2695`,
    4505: `2695`,
    4506: `2696`,
    4507: `2696`,
    4508: `2697`,
    4509: `2697`,
    451: `118`,
    4510: `2698`,
    4511: `2698`,
    4512: `2699`,
    4513: `2699`,
    4514: `2700`,
    4515: `2700`,
    4516: `2700`,
    4517: `2702`,
    4518: `2702`,
    4519: `2703`,
    452: `119`,
    4520: `2704`,
    4521: `2704`,
    4522: `2705`,
    4523: `2705`,
    4524: `2706`,
    4525: `2707`,
    4526: `2708`,
    4527: `2709`,
    4528: `2710`,
    4529: `2711`,
    453: `120`,
    4530: `2711`,
    4531: `2712`,
    4532: `2712`,
    4533: `2713`,
    4534: `2713`,
    4535: `2714`,
    4536: `2714`,
    4537: `2715`,
    4538: `2715`,
    4539: `2716`,
    454: `120`,
    4540: `2716`,
    4541: `2716`,
    4542: `2718`,
    4543: `2718`,
    4544: `2719`,
    4545: `2719`,
    4546: `2720`,
    4547: `2720`,
    4548: `2720`,
    4549: `2720`,
    455: `121`,
    4550: `2720`,
    4551: `2720`,
    4552: `2720`,
    4553: `2720`,
    4554: `2720`,
    4555: `2720`,
    4556: `2721`,
    4557: `2721`,
    4558: `2722`,
    4559: `2723`,
    456: `122`,
    4560: `2724`,
    4561: `2724`,
    4562: `2725`,
    4563: `2725`,
    4564: `2726`,
    4565: `2726`,
    4566: `2727`,
    4567: `2727`,
    4568: `2728`,
    4569: `2729`,
    457: `123`,
    4570: `2729`,
    4571: `2730`,
    4572: `2730`,
    4573: `2731`,
    4574: `2731`,
    4575: `2731`,
    4576: `2732`,
    4577: `2732`,
    4578: `2733`,
    4579: `2734`,
    458: `124`,
    4580: `2734`,
    4581: `2735`,
    4582: `2736`,
    4583: `2736`,
    4584: `2736`,
    4585: `2737`,
    4586: `2737`,
    4587: `2738`,
    4588: `2739`,
    4589: `2739`,
    459: `124`,
    4590: `2740`,
    4591: `2741`,
    4592: `2741`,
    4593: `2741`,
    4594: `2742`,
    4595: `2742`,
    4596: `2743`,
    4597: `2744`,
    4598: `2745`,
    4599: `2746`,
    46: `2`,
    460: `125`,
    4600: `2747`,
    4601: `2748`,
    4602: `2748`,
    4603: `2749`,
    4604: `2750`,
    4605: `2751`,
    4606: `2752`,
    4607: `2753`,
    4608: `2754`,
    4609: `2755`,
    461: `125`,
    4610: `2755`,
    4611: `2756`,
    4612: `2757`,
    4613: `2758`,
    4614: `2759`,
    4615: `2760`,
    4616: `2761`,
    4617: `2761`,
    4618: `2762`,
    4619: `2763`,
    462: `125`,
    4620: `2764`,
    4621: `2765`,
    4622: `2766`,
    4623: `2767`,
    4624: `2767`,
    4625: `2767`,
    4626: `2768`,
    4627: `2768`,
    4628: `2769`,
    4629: `2770`,
    463: `127`,
    4630: `2770`,
    4631: `2771`,
    4632: `2772`,
    4633: `2772`,
    4634: `2772`,
    4635: `2773`,
    4636: `2773`,
    4637: `2774`,
    4638: `2775`,
    4639: `2775`,
    464: `127`,
    4640: `2776`,
    4641: `2776`,
    4642: `2777`,
    4643: `2778`,
    4644: `2779`,
    4645: `2780`,
    4646: `2781`,
    4647: `2782`,
    4648: `2782`,
    4649: `2783`,
    465: `127`,
    4650: `2783`,
    4651: `2784`,
    4652: `2784`,
    4653: `2785`,
    4654: `2785`,
    4655: `2786`,
    4656: `2786`,
    4657: `2787`,
    4658: `2787`,
    4659: `2787`,
    466: `128`,
    4660: `2789`,
    4661: `2789`,
    4662: `2790`,
    4663: `2790`,
    4664: `2791`,
    4665: `2791`,
    4666: `2792`,
    4667: `2793`,
    4668: `2793`,
    4669: `2793`,
    467: `129`,
    4670: `2794`,
    4671: `2794`,
    4672: `2795`,
    4673: `2795`,
    4674: `2796`,
    4675: `2796`,
    4676: `2797`,
    4677: `2798`,
    4678: `2798`,
    4679: `2798`,
    468: `129`,
    4680: `2799`,
    4681: `2799`,
    4682: `2800`,
    4683: `2801`,
    4684: `2802`,
    4685: `2803`,
    4686: `2804`,
    4687: `2804`,
    4688: `2805`,
    4689: `2806`,
    469: `131`,
    4690: `2807`,
    4691: `2808`,
    4692: `2809`,
    4693: `2810`,
    4694: `2810`,
    4695: `2811`,
    4696: `2812`,
    4697: `2813`,
    4698: `2814`,
    4699: `2815`,
    47: `2`,
    470: `131`,
    4700: `2816`,
    4701: `2817`,
    4702: `2817`,
    4703: `2818`,
    4704: `2819`,
    4705: `2820`,
    4706: `2821`,
    4707: `2822`,
    4708: `2823`,
    4709: `2824`,
    471: `132`,
    4710: `2824`,
    4711: `2824`,
    4712: `2825`,
    4713: `2825`,
    4714: `2826`,
    4715: `2827`,
    4716: `2827`,
    4717: `2828`,
    4718: `2829`,
    4719: `2829`,
    472: `133`,
    4720: `2829`,
    4721: `2830`,
    4722: `2830`,
    4723: `2831`,
    4724: `2832`,
    4725: `2832`,
    4726: `2833`,
    4727: `2833`,
    4728: `2834`,
    4729: `2835`,
    473: `133`,
    4730: `2836`,
    4731: `2837`,
    4732: `2838`,
    4733: `2839`,
    4734: `2839`,
    4735: `2840`,
    4736: `2840`,
    4737: `2841`,
    4738: `2841`,
    4739: `2842`,
    474: `134`,
    4740: `2842`,
    4741: `2843`,
    4742: `2843`,
    4743: `2844`,
    4744: `2844`,
    4745: `2844`,
    4746: `2846`,
    4747: `2846`,
    4748: `2847`,
    4749: `2848`,
    475: `134`,
    4750: `2848`,
    4751: `2849`,
    4752: `2849`,
    4753: `2850`,
    4754: `2851`,
    4755: `2852`,
    4756: `2853`,
    4757: `2854`,
    4758: `2855`,
    4759: `2855`,
    476: `135`,
    4760: `2856`,
    4761: `2856`,
    4762: `2857`,
    4763: `2857`,
    4764: `2858`,
    4765: `2858`,
    4766: `2859`,
    4767: `2859`,
    4768: `2860`,
    4769: `2860`,
    477: `136`,
    4770: `2860`,
    4771: `2862`,
    4772: `2862`,
    4773: `2863`,
    4774: `2864`,
    4775: `2864`,
    4776: `2865`,
    4777: `2865`,
    4778: `2866`,
    4779: `2867`,
    478: `136`,
    4780: `2868`,
    4781: `2869`,
    4782: `2870`,
    4783: `2871`,
    4784: `2871`,
    4785: `2872`,
    4786: `2872`,
    4787: `2873`,
    4788: `2873`,
    4789: `2874`,
    479: `136`,
    4790: `2874`,
    4791: `2875`,
    4792: `2875`,
    4793: `2876`,
    4794: `2876`,
    4795: `2876`,
    4796: `2878`,
    4797: `2878`,
    4798: `2879`,
    4799: `2879`,
    48: `2`,
    480: `137`,
    4800: `2880`,
    4801: `2880`,
    4802: `2881`,
    4803: `2882`,
    4804: `2882`,
    4805: `2882`,
    4806: `2883`,
    4807: `2883`,
    4808: `2884`,
    4809: `2884`,
    481: `138`,
    4810: `2885`,
    4811: `2885`,
    4812: `2886`,
    4813: `2887`,
    4814: `2887`,
    4815: `2887`,
    4816: `2888`,
    4817: `2888`,
    4818: `2889`,
    4819: `2890`,
    482: `138`,
    4820: `2891`,
    4821: `2892`,
    4822: `2893`,
    4823: `2893`,
    4824: `2894`,
    4825: `2895`,
    4826: `2896`,
    4827: `2897`,
    4828: `2898`,
    4829: `2899`,
    483: `139`,
    4830: `2899`,
    4831: `2900`,
    4832: `2901`,
    4833: `2902`,
    4834: `2903`,
    4835: `2904`,
    4836: `2905`,
    4837: `2906`,
    4838: `2906`,
    4839: `2907`,
    484: `140`,
    4840: `2908`,
    4841: `2909`,
    4842: `2910`,
    4843: `2911`,
    4844: `2912`,
    4845: `2913`,
    4846: `2913`,
    4847: `2913`,
    4848: `2914`,
    4849: `2914`,
    485: `141`,
    4850: `2915`,
    4851: `2916`,
    4852: `2916`,
    4853: `2917`,
    4854: `2918`,
    4855: `2918`,
    4856: `2918`,
    4857: `2919`,
    4858: `2919`,
    4859: `2920`,
    486: `142`,
    4860: `2921`,
    4861: `2921`,
    4862: `2922`,
    4863: `2922`,
    4864: `2923`,
    4865: `2924`,
    4866: `2925`,
    4867: `2926`,
    4868: `2927`,
    4869: `2928`,
    487: `142`,
    4870: `2928`,
    4871: `2929`,
    4872: `2929`,
    4873: `2930`,
    4874: `2930`,
    4875: `2931`,
    4876: `2931`,
    4877: `2932`,
    4878: `2932`,
    4879: `2933`,
    488: `143`,
    4880: `2933`,
    4881: `2933`,
    4882: `2935`,
    4883: `2935`,
    4884: `2936`,
    4885: `2936`,
    4886: `2936`,
    4887: `2937`,
    4888: `2937`,
    4889: `2938`,
    489: `143`,
    4890: `2938`,
    4891: `2938`,
    4892: `2940`,
    4893: `2940`,
    4894: `2941`,
    4895: `2942`,
    4896: `2942`,
    4897: `2943`,
    4898: `2943`,
    4899: `2944`,
    49: `2`,
    490: `143`,
    4900: `2945`,
    4901: `2946`,
    4902: `2947`,
    4903: `2948`,
    4904: `2949`,
    4905: `2949`,
    4906: `2950`,
    4907: `2950`,
    4908: `2951`,
    4909: `2951`,
    491: `145`,
    4910: `2952`,
    4911: `2952`,
    4912: `2953`,
    4913: `2953`,
    4914: `2954`,
    4915: `2954`,
    4916: `2954`,
    4917: `2956`,
    4918: `2956`,
    4919: `2957`,
    492: `145`,
    4920: `2958`,
    4921: `2958`,
    4922: `2959`,
    4923: `2959`,
    4924: `2960`,
    4925: `2961`,
    4926: `2962`,
    4927: `2963`,
    4928: `2964`,
    4929: `2965`,
    493: `145`,
    4930: `2965`,
    4931: `2966`,
    4932: `2966`,
    4933: `2967`,
    4934: `2967`,
    4935: `2968`,
    4936: `2968`,
    4937: `2969`,
    4938: `2969`,
    4939: `2970`,
    494: `146`,
    4940: `2970`,
    4941: `2970`,
    4942: `2973`,
    4943: `2973`,
    4944: `2974`,
    4945: `2974`,
    4946: `2975`,
    4947: `2975`,
    4948: `2976`,
    4949: `2977`,
    495: `147`,
    4950: `2977`,
    4951: `2978`,
    4952: `2979`,
    4953: `2979`,
    4954: `2979`,
    4955: `2980`,
    4956: `2980`,
    4957: `2981`,
    4958: `2982`,
    4959: `2982`,
    496: `147`,
    4960: `2984`,
    4961: `2984`,
    4962: `2985`,
    4963: `2986`,
    4964: `2986`,
    4965: `2987`,
    4966: `2988`,
    4967: `2988`,
    4968: `2989`,
    4969: `2989`,
    497: `147`,
    4970: `2989`,
    4971: `2991`,
    4972: `2991`,
    4973: `2992`,
    4974: `2992`,
    4975: `2993`,
    4976: `2993`,
    4977: `2994`,
    4978: `2995`,
    4979: `2995`,
    498: `148`,
    4980: `2996`,
    4981: `2996`,
    4982: `2996`,
    4983: `2997`,
    4984: `2997`,
    4985: `2998`,
    4986: `2998`,
    4987: `2999`,
    4988: `3000`,
    4989: `3001`,
    499: `149`,
    4990: `3002`,
    4991: `3002`,
    4992: `3003`,
    4993: `3004`,
    4994: `3004`,
    4995: `3005`,
    4996: `3005`,
    4997: `3006`,
    4998: `3006`,
    4999: `3007`,
    5: `2`,
    50: `2`,
    500: `149`,
    5000: `3008`,
    5001: `3009`,
    5002: `3009`,
    5003: `3010`,
    5004: `3010`,
    5005: `3011`,
    5006: `3011`,
    5007: `3012`,
    5008: `3012`,
    5009: `3013`,
    501: `149`,
    5010: `3013`,
    5011: `3013`,
    5012: `3015`,
    5013: `3015`,
    5014: `3016`,
    5015: `3017`,
    5016: `3018`,
    5017: `3018`,
    5018: `3018`,
    5019: `3018`,
    502: `150`,
    5020: `3018`,
    5021: `3018`,
    5022: `3019`,
    5023: `3019`,
    5024: `3019`,
    5025: `3021`,
    5026: `3022`,
    5027: `3022`,
    5028: `3023`,
    5029: `3023`,
    503: `151`,
    5030: `3023`,
    5031: `3025`,
    5032: `3025`,
    5033: `3026`,
    5034: `3027`,
    5035: `3028`,
    5036: `3028`,
    5037: `3029`,
    5038: `3029`,
    5039: `3029`,
    504: `151`,
    5040: `3031`,
    5041: `3031`,
    5042: `3032`,
    5043: `3032`,
    5044: `3032`,
    5045: `3033`,
    5046: `3033`,
    5047: `3034`,
    5048: `3035`,
    5049: `3035`,
    505: `152`,
    5050: `3036`,
    5051: `3037`,
    5052: `3037`,
    5053: `3038`,
    5054: `3038`,
    5055: `3038`,
    5056: `3039`,
    5057: `3039`,
    5058: `3040`,
    5059: `3041`,
    506: `152`,
    5060: `3042`,
    5061: `3042`,
    5062: `3043`,
    5063: `3044`,
    5064: `3045`,
    5065: `3045`,
    5066: `3046`,
    5067: `3046`,
    5068: `3046`,
    5069: `3047`,
    507: `153`,
    5070: `3048`,
    5071: `3048`,
    5072: `3049`,
    5073: `3049`,
    5074: `3049`,
    5075: `3050`,
    5076: `3051`,
    5077: `3051`,
    5078: `3051`,
    5079: `3052`,
    508: `153`,
    5080: `3052`,
    5081: `3053`,
    5082: `3053`,
    5083: `3054`,
    5084: `3055`,
    5085: `3056`,
    5086: `3057`,
    5087: `3057`,
    5088: `3058`,
    5089: `3059`,
    509: `155`,
    5090: `3059`,
    5091: `3060`,
    5092: `3061`,
    5093: `3061`,
    5094: `3062`,
    5095: `3062`,
    5096: `3063`,
    5097: `3063`,
    5098: `3064`,
    5099: `3064`,
    51: `2`,
    510: `155`,
    5100: `3064`,
    5101: `3066`,
    5102: `3066`,
    5103: `3067`,
    5104: `3068`,
    5105: `3068`,
    5106: `3069`,
    5107: `3069`,
    5108: `3069`,
    5109: `3071`,
    511: `156`,
    5110: `3071`,
    5111: `3072`,
    5112: `3072`,
    5113: `3072`,
    5114: `3073`,
    5115: `3073`,
    5116: `3074`,
    5117: `3074`,
    5118: `3074`,
    5119: `3076`,
    512: `157`,
    5120: `3076`,
    5121: `3077`,
    5122: `3077`,
    5123: `3078`,
    5124: `3078`,
    5125: `3079`,
    5126: `3080`,
    5127: `3080`,
    5128: `3081`,
    5129: `3081`,
    513: `157`,
    5130: `3081`,
    5131: `3082`,
    5132: `3082`,
    5133: `3083`,
    5134: `3084`,
    5135: `3085`,
    5136: `3085`,
    5137: `3086`,
    5138: `3087`,
    5139: `3088`,
    514: `157`,
    5140: `3088`,
    5141: `3089`,
    5142: `3089`,
    5143: `3089`,
    5144: `3090`,
    5145: `3091`,
    5146: `3091`,
    5147: `3092`,
    5148: `3092`,
    5149: `3092`,
    515: `158`,
    5150: `3093`,
    5151: `3094`,
    5152: `3094`,
    5153: `3094`,
    5154: `3095`,
    5155: `3095`,
    5156: `3096`,
    5157: `3096`,
    5158: `3097`,
    5159: `3098`,
    516: `158`,
    5160: `3099`,
    5161: `3100`,
    5162: `3100`,
    5163: `3101`,
    5164: `3102`,
    5165: `3102`,
    5166: `3103`,
    5167: `3104`,
    5168: `3104`,
    5169: `3105`,
    517: `159`,
    5170: `3105`,
    5171: `3106`,
    5172: `3106`,
    5173: `3107`,
    5174: `3107`,
    5175: `3107`,
    5176: `3109`,
    5177: `3109`,
    5178: `3109`,
    5179: `3112`,
    518: `160`,
    5180: `3113`,
    5181: `3114`,
    5182: `3115`,
    5183: `3115`,
    5184: `3116`,
    5185: `3117`,
    5186: `3117`,
    5187: `3117`,
    5188: `3118`,
    5189: `3119`,
    519: `160`,
    5190: `3120`,
    5191: `3121`,
    5192: `3122`,
    5193: `3129`,
    5194: `3129`,
    5195: `3130`,
    5196: `3130`,
    5197: `3131`,
    5198: `3132`,
    5199: `3139`,
    52: `2`,
    520: `160`,
    5200: `3139`,
    5201: `3140`,
    5202: `3141`,
    5203: `3142`,
    5204: `3142`,
    5205: `3142`,
    5206: `3142`,
    5207: `3142`,
    5208: `3142`,
    5209: `3143`,
    521: `161`,
    5210: `3143`,
    5211: `3143`,
    5212: `3145`,
    5213: `3146`,
    5214: `3146`,
    5215: `3147`,
    5216: `3147`,
    5217: `3147`,
    5218: `3149`,
    5219: `3149`,
    522: `161`,
    5220: `3150`,
    5221: `3151`,
    5222: `3152`,
    5223: `3152`,
    5224: `3153`,
    5225: `3153`,
    5226: `3153`,
    5227: `3155`,
    5228: `3155`,
    5229: `3156`,
    523: `162`,
    5230: `3156`,
    5231: `3157`,
    5232: `3158`,
    5233: `3163`,
    5234: `3163`,
    5235: `3164`,
    5236: `3164`,
    5237: `3165`,
    5238: `3166`,
    5239: `3166`,
    524: `163`,
    5240: `3167`,
    5241: `3168`,
    5242: `3169`,
    5243: `3169`,
    5244: `3170`,
    5245: `3170`,
    5246: `3171`,
    5247: `3172`,
    5248: `3173`,
    5249: `3173`,
    525: `164`,
    5250: `3174`,
    5251: `3175`,
    5252: `3176`,
    5253: `3176`,
    5254: `3177`,
    5255: `3177`,
    5256: `3178`,
    5257: `3178`,
    5258: `3179`,
    5259: `3180`,
    526: `164`,
    5260: `3181`,
    5261: `3181`,
    5262: `3182`,
    5263: `3182`,
    5264: `3183`,
    5265: `3184`,
    5266: `3185`,
    5267: `3185`,
    5268: `3186`,
    5269: `3186`,
    527: `165`,
    5270: `3187`,
    5271: `3187`,
    5272: `3188`,
    5273: `3189`,
    5274: `3189`,
    5275: `3189`,
    5276: `3190`,
    5277: `3190`,
    5278: `3191`,
    5279: `3191`,
    528: `166`,
    5280: `3192`,
    5281: `3192`,
    5282: `3192`,
    5283: `3193`,
    5284: `3193`,
    5285: `3194`,
    5286: `3194`,
    5287: `3195`,
    5288: `3195`,
    5289: `3196`,
    529: `167`,
    5290: `3197`,
    5291: `3198`,
    5292: `3199`,
    5293: `3199`,
    5294: `3200`,
    5295: `3200`,
    5296: `3200`,
    5297: `3200`,
    5298: `3200`,
    5299: `3200`,
    53: `2`,
    530: `168`,
    5300: `3200`,
    5301: `3200`,
    5302: `3200`,
    5303: `3200`,
    5304: `3201`,
    5305: `3201`,
    5306: `3202`,
    5307: `3203`,
    5308: `3204`,
    5309: `3204`,
    531: `169`,
    5310: `3205`,
    5311: `3205`,
    5312: `3206`,
    5313: `3206`,
    5314: `3207`,
    5315: `3207`,
    5316: `3207`,
    5317: `3208`,
    5318: `3208`,
    5319: `3209`,
    532: `169`,
    5320: `3210`,
    5321: `3210`,
    5322: `3211`,
    5323: `3212`,
    5324: `3212`,
    5325: `3212`,
    5326: `3214`,
    5327: `3214`,
    5328: `3215`,
    5329: `3216`,
    533: `170`,
    5330: `3216`,
    5331: `3217`,
    5332: `3218`,
    5333: `3218`,
    5334: `3218`,
    5335: `3219`,
    5336: `3219`,
    5337: `3220`,
    5338: `3221`,
    5339: `3222`,
    534: `170`,
    5340: `3223`,
    5341: `3224`,
    5342: `3225`,
    5343: `3225`,
    5344: `3226`,
    5345: `3227`,
    5346: `3228`,
    5347: `3229`,
    5348: `3230`,
    5349: `3231`,
    535: `170`,
    5350: `3232`,
    5351: `3232`,
    5352: `3233`,
    5353: `3234`,
    5354: `3235`,
    5355: `3236`,
    5356: `3237`,
    5357: `3239`,
    5358: `3240`,
    5359: `3240`,
    536: `172`,
    5360: `3241`,
    5361: `3242`,
    5362: `3242`,
    5363: `3243`,
    5364: `3243`,
    5365: `3244`,
    5366: `3245`,
    5367: `3245`,
    5368: `3245`,
    5369: `3246`,
    537: `172`,
    5370: `3247`,
    5371: `3248`,
    5372: `3249`,
    5373: `3250`,
    5374: `3251`,
    5375: `3251`,
    5376: `3251`,
    5377: `3252`,
    5378: `3252`,
    5379: `3253`,
    538: `172`,
    5380: `3254`,
    5381: `3254`,
    5382: `3255`,
    5383: `3256`,
    5384: `3256`,
    5385: `3256`,
    5386: `3257`,
    5387: `3257`,
    5388: `3258`,
    5389: `3258`,
    539: `173`,
    5390: `3259`,
    5391: `3260`,
    5392: `3261`,
    5393: `3261`,
    5394: `3262`,
    5395: `3263`,
    5396: `3263`,
    5397: `3264`,
    5398: `3265`,
    5399: `3266`,
    54: `2`,
    540: `174`,
    5400: `3267`,
    5401: `3268`,
    5402: `3269`,
    5403: `3269`,
    5404: `3270`,
    5405: `3270`,
    5406: `3271`,
    5407: `3271`,
    5408: `3272`,
    5409: `3272`,
    541: `174`,
    5410: `3273`,
    5411: `3273`,
    5412: `3273`,
    5413: `3275`,
    5414: `3276`,
    5415: `3276`,
    5416: `3277`,
    5417: `3277`,
    5418: `3277`,
    5419: `3279`,
    542: `174`,
    5420: `3279`,
    5421: `3280`,
    5422: `3281`,
    5423: `3282`,
    5424: `3282`,
    5425: `3283`,
    5426: `3283`,
    5427: `3283`,
    5428: `3285`,
    5429: `3285`,
    543: `175`,
    5430: `3286`,
    5431: `3286`,
    5432: `3287`,
    5433: `3287`,
    5434: `3288`,
    5435: `3289`,
    5436: `3290`,
    5437: `3291`,
    5438: `3291`,
    5439: `3292`,
    544: `176`,
    5440: `3292`,
    5441: `3292`,
    5442: `3292`,
    5443: `3292`,
    5444: `3292`,
    5445: `3292`,
    5446: `3292`,
    5447: `3292`,
    5448: `3292`,
    5449: `3293`,
    545: `176`,
    5450: `3293`,
    5451: `3294`,
    5452: `3295`,
    5453: `3296`,
    5454: `3296`,
    5455: `3297`,
    5456: `3297`,
    5457: `3298`,
    5458: `3298`,
    5459: `3299`,
    546: `176`,
    5460: `3299`,
    5461: `3299`,
    5462: `3300`,
    5463: `3300`,
    5464: `3301`,
    5465: `3302`,
    5466: `3302`,
    5467: `3303`,
    5468: `3304`,
    5469: `3304`,
    547: `177`,
    5470: `3304`,
    5471: `3306`,
    5472: `3306`,
    5473: `3307`,
    5474: `3308`,
    5475: `3308`,
    5476: `3309`,
    5477: `3310`,
    5478: `3310`,
    5479: `3310`,
    548: `178`,
    5480: `3311`,
    5481: `3311`,
    5482: `3312`,
    5483: `3313`,
    5484: `3314`,
    5485: `3315`,
    5486: `3316`,
    5487: `3317`,
    5488: `3317`,
    5489: `3318`,
    549: `178`,
    5490: `3319`,
    5491: `3320`,
    5492: `3321`,
    5493: `3322`,
    5494: `3323`,
    5495: `3324`,
    5496: `3324`,
    5497: `3325`,
    5498: `3326`,
    5499: `3327`,
    55: `2`,
    550: `179`,
    5500: `3328`,
    5501: `3329`,
    5502: `3331`,
    5503: `3332`,
    5504: `3332`,
    5505: `3333`,
    5506: `3334`,
    5507: `3334`,
    5508: `3335`,
    5509: `3335`,
    551: `179`,
    5510: `3336`,
    5511: `3337`,
    5512: `3337`,
    5513: `3337`,
    5514: `3338`,
    5515: `3339`,
    5516: `3340`,
    5517: `3341`,
    5518: `3342`,
    5519: `3343`,
    552: `180`,
    5520: `3343`,
    5521: `3343`,
    5522: `3344`,
    5523: `3344`,
    5524: `3345`,
    5525: `3346`,
    5526: `3346`,
    5527: `3347`,
    5528: `3348`,
    5529: `3348`,
    553: `180`,
    5530: `3348`,
    5531: `3349`,
    5532: `3349`,
    5533: `3350`,
    5534: `3350`,
    5535: `3351`,
    5536: `3352`,
    5537: `3353`,
    5538: `3353`,
    5539: `3354`,
    554: `182`,
    5540: `3355`,
    5541: `3355`,
    5542: `3356`,
    5543: `3357`,
    5544: `3358`,
    5545: `3359`,
    5546: `3360`,
    5547: `3361`,
    5548: `3361`,
    5549: `3362`,
    555: `182`,
    5550: `3362`,
    5551: `3363`,
    5552: `3363`,
    5553: `3364`,
    5554: `3364`,
    5555: `3365`,
    5556: `3365`,
    5557: `3365`,
    5558: `3367`,
    5559: `3367`,
    556: `183`,
    5560: `3368`,
    5561: `3368`,
    5562: `3369`,
    5563: `3369`,
    5564: `3370`,
    5565: `3371`,
    5566: `3371`,
    5567: `3371`,
    5568: `3373`,
    5569: `3373`,
    557: `184`,
    5570: `3374`,
    5571: `3374`,
    5572: `3375`,
    5573: `3375`,
    5574: `3376`,
    5575: `3377`,
    5576: `3377`,
    5577: `3377`,
    5578: `3378`,
    5579: `3378`,
    558: `184`,
    5580: `3379`,
    5581: `3380`,
    5582: `3381`,
    5583: `3382`,
    5584: `3384`,
    5585: `3385`,
    5586: `3385`,
    5587: `3386`,
    5588: `3387`,
    5589: `3388`,
    559: `184`,
    5590: `3388`,
    5591: `3389`,
    5592: `3390`,
    5593: `3390`,
    5594: `3390`,
    5595: `3391`,
    5596: `3392`,
    5597: `3393`,
    5598: `3394`,
    5599: `3395`,
    56: `2`,
    560: `185`,
    5600: `3396`,
    5601: `3396`,
    5602: `3397`,
    5603: `3398`,
    5604: `3399`,
    5605: `3400`,
    5606: `3401`,
    5607: `3402`,
    5608: `3403`,
    5609: `3403`,
    561: `185`,
    5610: `3404`,
    5611: `3405`,
    5612: `3406`,
    5613: `3407`,
    5614: `3408`,
    5615: `3409`,
    5616: `3410`,
    5617: `3410`,
    5618: `3410`,
    5619: `3411`,
    562: `186`,
    5620: `3411`,
    5621: `3412`,
    5622: `3413`,
    5623: `3413`,
    5624: `3414`,
    5625: `3415`,
    5626: `3415`,
    5627: `3415`,
    5628: `3416`,
    5629: `3416`,
    563: `187`,
    5630: `3417`,
    5631: `3417`,
    5632: `3418`,
    5633: `3419`,
    5634: `3420`,
    5635: `3420`,
    5636: `3421`,
    5637: `3422`,
    5638: `3422`,
    5639: `3423`,
    564: `187`,
    5640: `3424`,
    5641: `3425`,
    5642: `3426`,
    5643: `3427`,
    5644: `3428`,
    5645: `3428`,
    5646: `3429`,
    5647: `3429`,
    5648: `3430`,
    5649: `3430`,
    565: `187`,
    5650: `3431`,
    5651: `3431`,
    5652: `3432`,
    5653: `3432`,
    5654: `3432`,
    5655: `3434`,
    5656: `3434`,
    5657: `3435`,
    5658: `3435`,
    5659: `3436`,
    566: `188`,
    5660: `3437`,
    5661: `3438`,
    5662: `3438`,
    5663: `3439`,
    5664: `3440`,
    5665: `3440`,
    5666: `3441`,
    5667: `3442`,
    5668: `3443`,
    5669: `3444`,
    567: `188`,
    5670: `3445`,
    5671: `3446`,
    5672: `3446`,
    5673: `3447`,
    5674: `3447`,
    5675: `3448`,
    5676: `3448`,
    5677: `3449`,
    5678: `3449`,
    5679: `3450`,
    568: `189`,
    5680: `3450`,
    5681: `3450`,
    5682: `3452`,
    5683: `3452`,
    5684: `3453`,
    5685: `3453`,
    5686: `3454`,
    5687: `3455`,
    5688: `3456`,
    5689: `3456`,
    569: `190`,
    5690: `3457`,
    5691: `3458`,
    5692: `3458`,
    5693: `3459`,
    5694: `3460`,
    5695: `3461`,
    5696: `3462`,
    5697: `3463`,
    5698: `3464`,
    5699: `3464`,
    57: `2`,
    570: `191`,
    5700: `3465`,
    5701: `3465`,
    5702: `3466`,
    5703: `3466`,
    5704: `3467`,
    5705: `3467`,
    5706: `3468`,
    5707: `3468`,
    5708: `3468`,
    5709: `3470`,
    571: `191`,
    5710: `3470`,
    5711: `3470`,
    5712: `3472`,
    5713: `3473`,
    5714: `3475`,
    5715: `3476`,
    5716: `3477`,
    5717: `3478`,
    5718: `3478`,
    5719: `3479`,
    572: `192`,
    5720: `3479`,
    5721: `3480`,
    5722: `3480`,
    5723: `3480`,
    5724: `3481`,
    5725: `3483`,
    5726: `3484`,
    5727: `3485`,
    5728: `3485`,
    5729: `3485`,
    573: `193`,
    5730: `3486`,
    5731: `3487`,
    5732: `3487`,
    5733: `3488`,
    5734: `3488`,
    5735: `3488`,
    5736: `3489`,
    5737: `3491`,
    5738: `3492`,
    5739: `3493`,
    574: `194`,
    5740: `3493`,
    5741: `3494`,
    5742: `3496`,
    5743: `3496`,
    5744: `3497`,
    5745: `3498`,
    5746: `3498`,
    5747: `3499`,
    5748: `3501`,
    5749: `3502`,
    575: `195`,
    5750: `3503`,
    5751: `3504`,
    5752: `3504`,
    5753: `3504`,
    5754: `3505`,
    5755: `3505`,
    5756: `3506`,
    5757: `3507`,
    5758: `3508`,
    5759: `3510`,
    576: `196`,
    5760: `3511`,
    5761: `3512`,
    5762: `3513`,
    5763: `3513`,
    5764: `3513`,
    5765: `3514`,
    5766: `3514`,
    5767: `3515`,
    5768: `3515`,
    5769: `3515`,
    577: `196`,
    5770: `3516`,
    5771: `3516`,
    5772: `3516`,
    5773: `3518`,
    5774: `3519`,
    5775: `3519`,
    5776: `3519`,
    5777: `3522`,
    5778: `3522`,
    5779: `3523`,
    578: `197`,
    5780: `3523`,
    5781: `3524`,
    5782: `3525`,
    5783: `3526`,
    5784: `3527`,
    5785: `3527`,
    5786: `3528`,
    5787: `3529`,
    5788: `3529`,
    5789: `3530`,
    579: `197`,
    5790: `3530`,
    5791: `3531`,
    5792: `3531`,
    5793: `3532`,
    5794: `3533`,
    5795: `3534`,
    5796: `3534`,
    5797: `3535`,
    5798: `3536`,
    5799: `3537`,
    58: `2`,
    580: `197`,
    5800: `3538`,
    5801: `3538`,
    5802: `3539`,
    5803: `3540`,
    5804: `3541`,
    5805: `3543`,
    5806: `3544`,
    5807: `3544`,
    5808: `3545`,
    5809: `3547`,
    581: `199`,
    5810: `3548`,
    5811: `3549`,
    5812: `3550`,
    5813: `3551`,
    5814: `3551`,
    5815: `3552`,
    5816: `3553`,
    5817: `3554`,
    5818: `3555`,
    5819: `3557`,
    582: `199`,
    5820: `3558`,
    5821: `3558`,
    5822: `3558`,
    5823: `3559`,
    5824: `3559`,
    5825: `3560`,
    5826: `3561`,
    5827: `3561`,
    5828: `3562`,
    5829: `3563`,
    583: `200`,
    5830: `3563`,
    5831: `3564`,
    5832: `3565`,
    5833: `3565`,
    5834: `3566`,
    5835: `3567`,
    5836: `3567`,
    5837: `3568`,
    5838: `3569`,
    5839: `3569`,
    584: `201`,
    5840: `3570`,
    5841: `3571`,
    5842: `3571`,
    5843: `3572`,
    5844: `3573`,
    5845: `3573`,
    5846: `3574`,
    5847: `3575`,
    5848: `3575`,
    5849: `3576`,
    585: `202`,
    5850: `3576`,
    5851: `3576`,
    5852: `3577`,
    5853: `3578`,
    5854: `3578`,
    5855: `3579`,
    5856: `3581`,
    5857: `3581`,
    5858: `3582`,
    5859: `3583`,
    586: `202`,
    5860: `3583`,
    5861: `3584`,
    5862: `3586`,
    5863: `3586`,
    5864: `3587`,
    5865: `3587`,
    5866: `3588`,
    5867: `3589`,
    5868: `3590`,
    5869: `3590`,
    587: `203`,
    5870: `3590`,
    5871: `3591`,
    5872: `3591`,
    5873: `3591`,
    5874: `3593`,
    5875: `3594`,
    5876: `3594`,
    5877: `3595`,
    588: `203`,
    589: `204`,
    59: `2`,
    590: `204`,
    591: `205`,
    592: `206`,
    593: `207`,
    594: `207`,
    595: `208`,
    596: `209`,
    597: `210`,
    598: `210`,
    599: `211`,
    6: `2`,
    60: `2`,
    600: `212`,
    601: `213`,
    602: `214`,
    603: `221`,
    604: `222`,
    605: `222`,
    606: `223`,
    607: `223`,
    608: `223`,
    609: `223`,
    61: `2`,
    610: `223`,
    611: `223`,
    612: `223`,
    613: `223`,
    614: `223`,
    615: `223`,
    616: `224`,
    617: `224`,
    618: `225`,
    619: `226`,
    62: `2`,
    620: `227`,
    621: `227`,
    622: `228`,
    623: `228`,
    624: `229`,
    625: `229`,
    626: `230`,
    627: `230`,
    628: `231`,
    629: `232`,
    63: `2`,
    630: `233`,
    631: `233`,
    632: `234`,
    633: `234`,
    634: `235`,
    635: `235`,
    636: `236`,
    637: `236`,
    638: `237`,
    639: `237`,
    64: `2`,
    640: `238`,
    641: `238`,
    642: `240`,
    643: `240`,
    644: `241`,
    645: `241`,
    646: `241`,
    647: `243`,
    648: `243`,
    649: `244`,
    65: `2`,
    650: `244`,
    651: `245`,
    652: `246`,
    653: `247`,
    654: `247`,
    655: `248`,
    656: `249`,
    657: `250`,
    658: `250`,
    659: `251`,
    66: `2`,
    660: `252`,
    661: `253`,
    662: `253`,
    663: `254`,
    664: `255`,
    665: `256`,
    666: `256`,
    667: `257`,
    668: `258`,
    669: `258`,
    67: `2`,
    670: `258`,
    671: `259`,
    672: `260`,
    673: `260`,
    674: `261`,
    675: `261`,
    676: `263`,
    677: `263`,
    678: `264`,
    679: `264`,
    68: `2`,
    680: `265`,
    681: `266`,
    682: `267`,
    683: `267`,
    684: `267`,
    685: `268`,
    686: `269`,
    687: `270`,
    688: `270`,
    689: `271`,
    69: `2`,
    690: `272`,
    691: `272`,
    692: `273`,
    693: `274`,
    694: `275`,
    695: `276`,
    696: `276`,
    697: `277`,
    698: `278`,
    699: `279`,
    7: `2`,
    70: `2`,
    700: `281`,
    701: `281`,
    702: `281`,
    703: `283`,
    704: `283`,
    705: `284`,
    706: `284`,
    707: `284`,
    708: `286`,
    709: `286`,
    71: `2`,
    710: `286`,
    711: `286`,
    712: `286`,
    713: `286`,
    714: `287`,
    715: `287`,
    716: `288`,
    717: `289`,
    718: `291`,
    719: `292`,
    72: `2`,
    720: `294`,
    721: `294`,
    722: `295`,
    723: `295`,
    724: `295`,
    725: `296`,
    726: `297`,
    727: `297`,
    728: `299`,
    729: `300`,
    73: `2`,
    730: `300`,
    731: `301`,
    732: `302`,
    733: `302`,
    734: `303`,
    735: `303`,
    736: `304`,
    737: `305`,
    738: `305`,
    739: `305`,
    74: `2`,
    740: `307`,
    741: `308`,
    742: `308`,
    743: `309`,
    744: `310`,
    745: `311`,
    746: `311`,
    747: `312`,
    748: `313`,
    749: `313`,
    75: `2`,
    750: `313`,
    751: `314`,
    752: `314`,
    753: `315`,
    754: `316`,
    755: `316`,
    756: `318`,
    757: `319`,
    758: `319`,
    759: `320`,
    76: `2`,
    760: `321`,
    761: `321`,
    762: `322`,
    763: `322`,
    764: `323`,
    765: `324`,
    766: `324`,
    767: `324`,
    768: `326`,
    769: `327`,
    77: `2`,
    770: `327`,
    771: `328`,
    772: `329`,
    773: `330`,
    774: `330`,
    775: `331`,
    776: `332`,
    777: `332`,
    778: `332`,
    779: `333`,
    78: `2`,
    780: `333`,
    781: `334`,
    782: `335`,
    783: `336`,
    784: `336`,
    785: `337`,
    786: `338`,
    787: `339`,
    788: `339`,
    789: `339`,
    79: `2`,
    790: `339`,
    791: `339`,
    792: `339`,
    793: `340`,
    794: `340`,
    795: `340`,
    796: `342`,
    797: `342`,
    798: `343`,
    799: `343`,
    8: `2`,
    80: `2`,
    800: `343`,
    801: `344`,
    802: `345`,
    803: `345`,
    804: `347`,
    805: `348`,
    806: `348`,
    807: `349`,
    808: `350`,
    809: `350`,
    81: `2`,
    810: `351`,
    811: `351`,
    812: `352`,
    813: `353`,
    814: `353`,
    815: `353`,
    816: `355`,
    817: `356`,
    818: `356`,
    819: `357`,
    82: `2`,
    820: `358`,
    821: `359`,
    822: `359`,
    823: `360`,
    824: `361`,
    825: `361`,
    826: `361`,
    827: `362`,
    828: `362`,
    829: `363`,
    83: `2`,
    830: `364`,
    831: `364`,
    832: `366`,
    833: `367`,
    834: `367`,
    835: `368`,
    836: `369`,
    837: `369`,
    838: `370`,
    839: `370`,
    84: `2`,
    840: `371`,
    841: `372`,
    842: `372`,
    843: `372`,
    844: `374`,
    845: `375`,
    846: `375`,
    847: `376`,
    848: `377`,
    849: `378`,
    85: `2`,
    850: `378`,
    851: `379`,
    852: `380`,
    853: `380`,
    854: `380`,
    855: `381`,
    856: `381`,
    857: `382`,
    858: `383`,
    859: `384`,
    86: `2`,
    860: `384`,
    861: `385`,
    862: `386`,
    863: `387`,
    864: `387`,
    865: `387`,
    866: `387`,
    867: `387`,
    868: `387`,
    869: `388`,
    87: `2`,
    870: `388`,
    871: `388`,
    872: `390`,
    873: `390`,
    874: `391`,
    875: `391`,
    876: `391`,
    877: `392`,
    878: `393`,
    879: `393`,
    88: `2`,
    880: `395`,
    881: `396`,
    882: `396`,
    883: `397`,
    884: `398`,
    885: `399`,
    886: `399`,
    887: `400`,
    888: `401`,
    889: `401`,
    89: `2`,
    890: `401`,
    891: `402`,
    892: `402`,
    893: `404`,
    894: `405`,
    895: `405`,
    896: `406`,
    897: `407`,
    898: `407`,
    899: `408`,
    9: `2`,
    90: `2`,
    900: `408`,
    901: `409`,
    902: `410`,
    903: `410`,
    904: `410`,
    905: `411`,
    906: `412`,
    907: `412`,
    908: `413`,
    909: `413`,
    91: `2`,
    910: `414`,
    911: `414`,
    912: `415`,
    913: `416`,
    914: `416`,
    915: `418`,
    916: `419`,
    917: `419`,
    918: `420`,
    919: `421`,
    92: `2`,
    920: `422`,
    921: `422`,
    922: `423`,
    923: `424`,
    924: `424`,
    925: `424`,
    926: `425`,
    927: `425`,
    928: `427`,
    929: `428`,
    93: `2`,
    930: `428`,
    931: `429`,
    932: `430`,
    933: `430`,
    934: `431`,
    935: `431`,
    936: `432`,
    937: `433`,
    938: `433`,
    939: `433`,
    94: `2`,
    940: `434`,
    941: `435`,
    942: `435`,
    943: `436`,
    944: `436`,
    945: `437`,
    946: `437`,
    947: `438`,
    948: `439`,
    949: `440`,
    95: `2`,
    950: `440`,
    951: `441`,
    952: `442`,
    953: `443`,
    954: `443`,
    955: `443`,
    956: `443`,
    957: `443`,
    958: `443`,
    959: `444`,
    96: `2`,
    960: `444`,
    961: `444`,
    962: `446`,
    963: `446`,
    964: `447`,
    965: `447`,
    966: `447`,
    967: `451`,
    968: `451`,
    969: `452`,
    97: `2`,
    970: `453`,
    971: `453`,
    972: `454`,
    973: `455`,
    974: `456`,
    975: `456`,
    976: `456`,
    977: `457`,
    978: `458`,
    979: `459`,
    98: `2`,
    980: `460`,
    981: `461`,
    982: `462`,
    983: `466`,
    984: `466`,
    985: `467`,
    986: `467`,
    987: `467`,
    988: `468`,
    989: `469`,
    99: `2`,
    990: `469`,
    991: `469`,
    992: `471`,
    993: `471`,
    994: `472`,
    995: `473`,
    996: `473`,
    997: `474`,
    998: `475`,
    999: `475`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 1,
  stateSize: 65,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T11","name":"v26279","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Dealer_submitHand0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_buyInsurance0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_doubleDown0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_getOutcome0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_placeBet0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_Player_submitHand0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_Player_surrender0_113","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v10583","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v12009","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v12077","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v2366","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2855","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4234","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4250","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5636","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5652","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7077","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7162","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7248","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7340","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7424","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7516","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7600","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7689","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"_reach_oe_v7773","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v26231","type":"uint256"},{"internalType":"uint256","name":"v26232","type":"uint256"}],"name":"Dealer_submitHand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v26238","type":"bool"}],"name":"Player_buyInsurance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v26244","type":"bool"}],"name":"Player_doubleDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v26250","type":"bool"}],"name":"Player_getOutcome","outputs":[{"internalType":"bytes20","name":"","type":"bytes20"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v26256","type":"bool"}],"name":"Player_placeBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v26264","type":"bool"},{"internalType":"uint256","name":"v26265","type":"uint256"},{"internalType":"uint256","name":"v26266","type":"uint256"}],"name":"Player_submitHand","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v26274","type":"bool"},{"internalType":"uint256","name":"v26275","type":"uint256"},{"internalType":"uint256","name":"v26276","type":"uint256"}],"name":"Player_surrender","outputs":[{"internalType":"bytes20","name":"","type":"bytes20"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"bool","name":"_boughtInsurance","type":"bool"},{"internalType":"uint256","name":"_cardCount","type":"uint256"},{"internalType":"uint256","name":"_cardValue","type":"uint256"},{"internalType":"bool","name":"_doubledDown","type":"bool"},{"internalType":"bool","name":"_surrendered","type":"bool"}],"internalType":"struct T2","name":"_Some","type":"tuple"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"bool","name":"_boughtInsurance","type":"bool"},{"internalType":"uint256","name":"_cardCount","type":"uint256"},{"internalType":"uint256","name":"_cardValue","type":"uint256"},{"internalType":"bool","name":"_doubledDown","type":"bool"},{"internalType":"bool","name":"_surrendered","type":"bool"}],"internalType":"struct T2","name":"_Some","type":"tuple"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T13","name":"v26282","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Dealer_submitHand0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_buyInsurance0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_doubleDown0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_getOutcome0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T5","name":"_Player_placeBet0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_Player_submitHand0_113","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_Player_surrender0_113","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"v26285","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"bank","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200b7fe9081380391601f1980601f85011683019360018060401b039284861084871117620003395781606092869260409889528339810103126200034f578351926200004e8462000354565b805184526020938585830151928683019384520151948682019586524360035586519161012083019280841087851117620003395761010093895260009381858093528285820152828b8201528260608201528260808201528260a08201528260c08201528260e0820152015260049060ff82541662000322577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a151801590811562000315575b5015620002fe5734620002e7578751966200012b8862000354565b8288019484865289890198858a5233905251855251875260019687845543885588519433848701525189860152516060850152606084526080840184811087821117620002d45788528351958611620002c157600254908782811c92168015620002b6575b83831014620002a35750601f811162000257575b508093601f8611600114620001ef57505091839491849394620001e3575b50501b916000199060031b1c1916176002555b5161b48d9081620003718239f35b015192503880620001c2565b600283528183209493928692918316915b888383106200023c575050501062000222575b505050811b01600255620001d5565b015160001960f88460031b161c1916905538808062000213565b85870151885590960195948501948793509081019062000200565b60028352818320601f870160051c81019183881062000298575b601f0160051c019087905b8281106200028c575050620001a4565b8481550187906200027c565b909150819062000271565b634e487b7160e01b845260229052602483fd5b91607f169162000190565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600a89519163100960cb60e01b8352820152fd5b602490600989519163100960cb60e01b8352820152fd5b9050600154143862000110565b885163100960cb60e01b8152600881840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003395760405256fe6040608081526004908136101561001d575b5050361561001b57005b005b6000803560e01c806301ceeedb14610b1057806305458f4214610aab5780631e93b0f114610a8c57806336e56ea514610a2a5780633702d0ce146109ef578063573b8510146106b95780635a7c84f814610669578063746235351461062e57806376cdb03b146105c757806383230757146105a857806389a366e91461051b578063ab53f2c6146104af578063aebf74be14610416578063bf7df9c3146103d0578063c5d86f6f14610386578063e6bd159114610333578063ef137d23146102cd5763f3cb9392146100ef5750610011565b6101c03660031901126102ca576101046110f1565b9180519261011184610cf8565b843584526101a03660231901126102b3578151946101008601906001600160401b038211878310176102b75750825260243560078110156102af578552816043193601126102b35781519361016585610cf8565b60443585526020946064358682015285870152846083193601126102af57825161018e81610c91565b60843580151581036102ab578152838701528460a3193601126102af5782516101b681610c91565b60a43580151581036102ab57815260608701528460c3193601126102af5782516101df81610c91565b60c43580151581036102ab57815260808701528460e3193601126102af57825161020881610c91565b60e43580151581036102ab57815260a08701526060366101031901126102af57825161023381610cc2565b6101043580151581036102ab5781526101243586820152610144358482015260c08701526060366101631901126102af5782519561027087610cc2565b610164359687151588036102ab576102a594959697815261018435888201526101a4358682015260e0820152868201526112fc565b51908152f35b8580fd5b8380fd5b8280fd5b634e487b7160e01b855260419052602484fd5b80fd5b509160203660031901126102b35760a09061032a6020946102ec610b7b565b906102f56110f1565b93849261030061b3b4565b90815190151590528881019182515251868251015261031d6111d7565b91825251878201526112fc565b01519051908152f35b50906020366003190112610382578060209261032a610350610b7b565b6103586110f1565b92839161036361b3b4565b908151901515905287810190600182515251868251015261031d6111d7565b5080fd5b5091346102b35760203660031901126102b35735916001600160a01b03831683036102ca57506103c16103cc926103bb610e1a565b50610ebf565b905191829182610c2c565b0390f35b5091346102b35760203660031901126102b35735916001600160a01b03831683036102ca575061040b6103cc92610405610fb3565b5061109f565b905191829182610bd2565b5091816003193601126102b35761042b6110f1565b6104a48184519561043b87610cf8565b602096879586820190358252602435815287519061045882610cf8565b885161046381610cf8565b8481528489820152825287820192610479611147565b845251825152518782510152828251525186825101526104976111d7565b91825251858201526112fc565b015115159051908152f35b50903461038257816003193601126103825781546104cb610d65565b91805193849283526020828185015284518093850152815b83811061050457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104e3565b6020838361059261052b36610b8f565b9390916105366110f1565b948593610541610e1a565b921515835288830190815287830191825261055a61b3de565b925115158351525188835101525186825101528681019060068251525160e0825101526105856111d7565b91825251868201526112fc565b60e0015190516001600160601b03199091168152f35b5090346103825781600319360112610382576020906001549051908152f35b508234610382578160031936011261038257806105e26110f1565b92540361061757602061010084848161060a6105fc610d65565b868082518301019101611207565b0151928391015251908152f35b602490600784519163100960cb60e01b8352820152fd5b5091346102b35760203660031901126102b35735916001600160a01b03831683036102ca57506103c16103cc92610663610e1a565b50610f37565b5090602036600319011261038257606060209261032a610687610b7b565b61068f6110f1565b92839161069a61b3b4565b908151901515905287810190600282515251868251015261031d6111d7565b5090602092836003193601126102b3576106d16110f1565b508151906106de82610c91565b80358252600191828554036109d8576106f5610d65565b906060828051810103126102ab5784519061070f82610cc2565b61071a8884016111f3565b82526060868401519389840194855201519086830191825260ff8554166109c1577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159687805133815283518c820152a15180159081156109b6575b501561099f57825134036109885781516001600160a01b03919033908316036109715790879291816107a46112ad565b93511683525193898301948552519387830194855260608301948486526080840185815260a08501908682528960c08701524360e08701528a51976107e889610cdd565b8789528d8901938885528c8a019589875260608b01978a895260808c01998b8b5260a08d019b8c525116809b525185525185525185525185525115158552868a554388558851958b87015251888601525160608501525160808401525160a083015251151560c082015260c0815261085f81610d4a565b8051916001600160401b03831161095e575061087c600254610c57565b601f8111610924575b508590601f83116001146108c35792829391839287946108b8575b50501b916000199060031b1c19161760025551908152f35b0151925038806108a0565b60028652868620919083601f198116885b8a8883831061090d57505050106108f4575b505050811b016002556102a5565b015160001960f88460031b161c191690553880806108e6565b8686015188559096019594850194879350016108d4565b61094e9060028752878720601f850160051c810191898610610954575b601f0160051c019061b39d565b38610885565b9091508190610941565b634e487b7160e01b865260419052602485fd5b865163100960cb60e01b8152600f81870152602490fd5b855163100960cb60e01b8152600e81860152602490fd5b855163100960cb60e01b8152600d81860152602490fd5b905085541438610774565b865163100960cb60e01b8152600c81870152602490fd5b835163100960cb60e01b8152600b81840152602490fd5b5091346102b35760203660031901126102b35735916001600160a01b03831683036102ca575061040b6103cc92610a24610fb3565b50610fdb565b5091346102b35760203660031901126102b35735916001600160a01b03831683036102ca5750610a64606092610a5e610e1a565b50610e39565b90808051928051610a7481610bb2565b84526020810151151560208501520151151590820152f35b5090346103825781600319360112610382576020906003549051908152f35b5090602036600319011261038257602091610afa610ac7610b7b565b610acf6110f1565b928391610ada61b3b4565b9081519015159052868101906003825152516080825101526105856111d7565b6080015190516001600160601b03199091168152f35b60208360c08461032a610b2236610b8f565b939091610b2d6110f1565b948593610b38610e1a565b9215158352898301908152888301918252610b5161b3de565b9251151583515251898351015251878251015287810190600582515251868251015261031d6111d7565b600435908115158203610b8a57565b600080fd5b6060906003190112610b8a576004358015158103610b8a57906024359060443590565b60021115610bbc57565b634e487b7160e01b600052602160045260246000fd5b91909160c06080604060e08401958051610beb81610bb2565b85526020810151151560208601520151805115156040850152602081015160608501526040810151828501526060810151151560a085015201511515910152565b91909160408060608301948051610c4281610bb2565b84526020810151151560208501520151910152565b90600182811c92168015610c87575b6020831014610c7157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610c66565b602081019081106001600160401b03821117610cac57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b03821117610cac57604052565b60c081019081106001600160401b03821117610cac57604052565b604081019081106001600160401b03821117610cac57604052565b60a081019081106001600160401b03821117610cac57604052565b61010081019081106001600160401b03821117610cac57604052565b60e081019081106001600160401b03821117610cac57604052565b604051906000600254610d7781610c57565b808552600191808316908115610dfb5750600114610db5575b5050829003601f01601f191682016001600160401b03811183821017610cac57604052565b6002600090815260209350918360008051602061b4018339815191525b838510610de757505050508301013880610d90565b805488860183015293019284908201610dd2565b919250506020925060ff191682850152151560051b8301013880610d90565b60405190610e2782610cc2565b60006040838281528260208201520152565b90610e42610e1a565b9160018060a01b03166000908082526005602052600160ff604084205416610e6981610bb2565b03610eb4576040929350815260056020522060ff60405191610e8a83610cc2565b54818116610e9781610bb2565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b90610ec8610e1a565b9160018060a01b03166000908082526006602052600160ff604084205416610eef81610bb2565b03610eb45760409293508152600660205220600160405191610f1083610cc2565b60ff8154818116610f2081610bb2565b855260081c16151560208401520154604082015290565b90610f40610e1a565b9160018060a01b03166000908082526007602052600160ff604084205416610f6781610bb2565b03610eb45760409293508152600760205220600160405191610f1083610cc2565b60405190610f9582610d13565b60006080838281528260208201528260408201528260608201520152565b60405190610fc082610cc2565b8160008152600060208201526040610fd6610f88565b910152565b90610fe4610fb3565b9160018060a01b0316600090808252600860205260ff91604091600184848420541661100f81610bb2565b03611092578152600860205281902081519394509161102d84610cc2565b80835481811661103c81610bb2565b865260081c1615156020850152600482519361105785610d13565b82600182015416151585526002810154602086015260038101548486015201548181161515606085015260081c161515608083015282015290565b5080855260208501525050565b906110a8610fb3565b9160018060a01b0316600090808252600960205260ff9160409160018484842054166110d381610bb2565b03611092578152600960205281902081519394509161102d84610cc2565b6040519061012082016001600160401b03811183821017610cac57604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b604090815161115581610d2e565b8092600090818352805161116881610cf8565b8281528260208201526020840152805161118181610c91565b82815281840152805161119381610c91565b828152606084015280516111a681610c91565b828152608084015251906111b982610c91565b815260a08201526111c8610e1a565b60c082015260e0610fd6610e1a565b604051906111e482610cf8565b81600081526020610fd6611147565b51906001600160a01b0382168203610b8a57565b908160c0910312610b8a5760a06040519161122183610cdd565b61122a816111f3565b83526020810151602084015260408101516040840152606081015160608401526080810151608084015201518015158103610b8a5760a082015290565b60408091805115158452602081015160208501520151910152565b516007811015610bbc5790565b60046000918281558260018201558260028201558260038201550155565b604051906112ba82610d2e565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b9060ff801983541691151516179055565b60405190929161132082016001600160401b03811183821017610cac578060405261132681610cf8565b600081526000611340840152825260405161134081610c91565b600081526020830152611351610e1a565b604083015261135e610fb3565b606083015261136b610f88565b6080830152611378610f88565b60a0830152611385610f88565b60c0830152600060e083015260006101008301526113a1610f88565b6101208301526113af610f88565b6101408301526113bd610f88565b61016083015260006101808301526113d3610f88565b6101a083015260006101c08301526113e9610f88565b6101e08301526040516113fb81610c91565b6000815261020083015261140d610e1a565b61022083015261141b610fb3565b610240830152611429610f88565b610260830152611437610f88565b610280830152611445610f88565b6102a083015260006102c083015260006102e0830152611463610f88565b610300830152611471610f88565b61032083015261147f610f88565b6103408301526000610360830152611495610f88565b61038083015260006103a08301526114ab610f88565b6103c08301526040516114bd81610c91565b600081526103e08301526114cf610e1a565b6104008301526114dd610e1a565b6104208301526114eb610e1a565b6104408301526114f9610fb3565b610460830152611507610fb3565b610480830152611515610fb3565b6104a0830152611523610f88565b6104c0830152611531610f88565b6104e083015261153f610f88565b6105008301526000610520830152600061054083015261155d610f88565b61056083015261156b610f88565b610580830152611579610f88565b6105a083015260006105c083015260006105e08301526000610600830152600061062083015260006106408301526000610660830152600061068083015260006106a08301526115c7610e1a565b6106c08301526115d5610fb3565b6106e08301526115e3610e1a565b6107008301526115f1610fb3565b6107208301526000610740830152600061076083015261160f610e1a565b61078083015261161d610fb3565b6107a083015261162b610e1a565b6107c0830152611639610fb3565b6107e0830152600061080083015261164f610e1a565b61082083015261165d610fb3565b61084083015261166b610e1a565b610860830152611679610fb3565b61088083015260006108a083015260006108c083015260006108e083015261169f610e1a565b6109008301526116ad610fb3565b6109208301526116bb610e1a565b6109408301526116c9610fb3565b610960830152600061098083015260006109a08301526116e7610e1a565b6109c08301526116f5610fb3565b6109e0830152611703610e1a565b610a00830152611711610fb3565b610a208301526000610a408301526000610a608301526000610a80830152611737610e1a565b610aa0830152611745610fb3565b610ac0830152611753610e1a565b610ae0830152611761610fb3565b610b008301526000610b208301526000610b4083015261177f610e1a565b610b6083015261178d610fb3565b610b8083015261179b610e1a565b610ba08301526117a9610fb3565b610bc08301526000610be08301526000610c008301526117c7610e1a565b610c208301526117d5610fb3565b610c408301526117e3610e1a565b610c608301526117f1610fb3565b610c808301526000610ca08301526000610cc083015261180f610e1a565b610ce083015261181d610fb3565b610d0083015261182b610e1a565b610d20830152611839610fb3565b610d4083015260405161184b81610c91565b60008152610d6083015261185d610e1a565b610d8083015261186b610f88565b610da0830152611879610f88565b610dc0830152611887610e1a565b610de0830152611895610e1a565b610e008301526118a3610fb3565b610e208301526000610e408301526000610e608301526118c1610f88565b610e808301526118cf610f88565b610ea08301526118dd610f88565b610ec08301526118eb610f88565b610ee08301526118f9610f88565b610f00830152611907610e1a565b610f20830152611915610e1a565b610f40830152611923610e1a565b610f60830152611931610e1a565b610f808301526000610fa08301526000610fc08301526000610fe08301526000611000830152600061102083015260006110408301526000611060830152600061108083015260006110a0830152611987610e1a565b6110c0830152611995610fb3565b6110e0830152600061110083015260006111208301526119b3610e1a565b6111408301526119c1610fb3565b611160830152600061118083015260006111a083015260006111c083015260006111e083015260006112008301526119f7610e1a565b611220830152611a05610fb3565b61124083015260006112608301526000611280830152611a23610e1a565b6112a0830152611a31610fb3565b6112c083015260006112e0830152600061130083015260046000540361b34457611a6b611a5c610d65565b60208082518301019101611207565b9360ff6004541661b32b57604051338152815160208201526020820151908151906007821015610bbc57611b2d60e07f8fcfef3659345ac19015fcbfcd8d8df944df4c8d2c7a6be27f345c781c379812946101e09460408501526020808201518051606087015201516080850152604081015151151560a0850152606081015151151560c085015260808101515115158285015260a0810151511515610100850152611b2060c0820151610120860190611267565b0151610180830190611267565ba18051801590811561b31f575b501561b30657611b4d6020820151611282565b6007811015610bbc57611df7576020908101518101518084529081015115611def575115155b15611dd65734611dbd5760206000917fe49223843509d89cb09bb23e79ce8572d29957039272c7eabf9ed65972808a2382604051858152a101526040611bb76112ad565b9360018060a01b0381511685526020810151602086015201516040840152602081510151606084015251516080830152600160a0830152600160c08301524360e083015260a0604051611c0981610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252611cbc82610d4a565b81516001600160401b038111610cac57611cd7600254610c57565b601f8111611d80575b50602092601f8211600114611d1d5792819293600092611d12575b50508160011b916000199060031b1c191617600255565b015190503880611cfb565b601f19821693600260005260206000209160005b868110611d685750836001959610611d4f575b505050811b01600255565b015160001960f88460031b161c19169055388080611d44565b91926020600181928685015181550194019201611d31565b6002600052611db79060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38611ce0565b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b506000611b73565b611e076020829493940151611282565b6007811015610bbc576001036127325760209081015160400151908201819052511561272457611e3633610ebf565b60408201526020810151511561271657611e4f33610fdb565b80606083015251611e5f81610bb2565b611e6881610bb2565b6126de57600060a0820151526000602060a083015101526000604060a083015101526000606060a083015101526000608060a0830151015260a081015160808201525b6001611eb633610e39565b51611ec081610bb2565b611ec981610bb2565b036126c557608081015151156126be5760005b156126a5576020840151340361268c57604081015151611efb81610bb2565b611f0481610bb2565b61265457600060e08201525b606081015151611f1f81610bb2565b611f2881610bb2565b61261a5761014081018051600090819052815160200181905281516040018190528151606001819052815160800152516101208201525b61012081015151156126135760005b156125fa5760208101515160409190156122be5761018090611f99602087015160e08301519061b35d565b828201523360005260066020528260002060ff199060018282541617905582820151600185600020015560016101a0830151526020610120830151015160206101a08401510152836101208301510151846101a0840151015260606101208301510151151560606101a0840151015260806101208301510151151560806101a08401510152336000526008602052600184600020918254161790556101a0810151608060048560002061205284511515600183016112eb565b60208401516002820155868401516003820155019161207760608201511515846112eb565b0151151561ff0082549160081b169061ff0019161790557fb632ebad9f7bbf2d69ce6daecf04ab39bc0a90016d8d981725acb83b1f944f266020838301518551908152a1015191015260a06120ca6112ad565b92600180831b038151168452602081015160208501526120f3604082015160208301519061b35d565b604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a060405161213081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526121e382610d4a565b81516001600160401b038111610cac576121fe600254610c57565b601f8111612281575b50602092601f82116001146122385792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106122695750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161224c565b60026000526122b89060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38612207565b6101c0906122d5602087015160e08301519061b35d565b828201523360005260076020528260002060ff199060018282541617905582820151600185600020015560016101e0830151526020610120830151015160206101e08401510152836101208301510151846101e0840151015260606101208301510151151560606101e0840151015260806101208301510151151560806101e08401510152336000526009602052600184600020918254161790556101e0810151608060048560002061238e84511515600183016112eb565b6020840151600282015586840151600382015501916123b360608201511515846112eb565b0151151561ff0082549160081b169061ff0019161790557fe97847926d6b98bb0b658d1e59071d6316fdb1c3dd8c4bf89898992a97cae03a6020838301518551908152a1015191015260a06124066112ad565b92600180831b0381511684526020810151602085015261242f604082015160208301519061b35d565b604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a060405161246c81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261251f82610d4a565b81516001600160401b038111610cac5761253a600254610c57565b601f81116125bd575b50602092601f82116001146125745792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106125a55750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201612588565b60026000526125f49060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38612543565b60405163100960cb60e01b815260186004820152602490fd5b6001611f6e565b600160608201515161262b81610bb2565b61263481610bb2565b03611f5f5760406060820151015180610160830152610120820152611f5f565b600160408201515161266581610bb2565b61266e81610bb2565b03611f105760408082015101518061010083015260e0820152611f10565b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b6001611edc565b60405163100960cb60e01b815260156004820152602490fd5b60016060820151516126ef81610bb2565b6126f881610bb2565b03611eab576040606082015101518060c08301526080820152611eab565b61271f3361109f565b611e4f565b61272d33610f37565b611e36565b61273f6020820151611282565b6007811015610bbc5760020361307e576020015160600151610200820181905251156130705761276e33610ebf565b61022082015261020081015151156130625761278933610fdb565b806102408301525161279a81610bb2565b6127a381610bb2565b6130265761028081018051600090819052815160200181905281516040018190528151606001819052815160800152516102608201525b60016127e533610e39565b516127ef81610bb2565b6127f881610bb2565b0361300d5761026081015160600151156130065760005b15612fed5760208401513403612fd4576102208101515161282f81610bb2565b61283881610bb2565b612f985760006102c08201525b6102408101515161285581610bb2565b61285e81610bb2565b612f5c5761032081018051600090819052815160200181905281516040018190528151606001819052815160800152516103008201525b6103008101516060015115612f555760005b15612f3c57610200810151516060919015612bfc57610360906128d460208701516102c08301519061b35d565b82820152336000526006602052604060002060ff1990600182825416179055828201516001604060002001556103008201515115156103808301515260206103008301510151602061038084015101526040610300830151015160406103808401510152600184610380840151015260806103008301510151151560806103808401510152336000526008602052600160406000209182541617905561038081015160806004604060002061298f84511515600183016112eb565b602084015160028201556040840151600382015501916129b4868201511515846112eb565b0151151561ff0082549160081b169061ff0019161790557f0d6c6130d2759b27ae49733db33b920719db8d6ac55ce447b3d2158fb7c4ae50602083830151604051908152a1015191015260a0612a086112ad565b92600180831b03815116845260208101516020850152612a31604082015160208301519061b35d565b604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a0604051612a6e81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252612b2182610d4a565b81516001600160401b038111610cac57612b3c600254610c57565b601f8111612bbf575b50602092601f8211600114612b765792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612ba75750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201612b8a565b6002600052612bf69060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38612b45565b6103a090612c1460208701516102c08301519061b35d565b82820152336000526007602052604060002060ff1990600182825416179055828201516001604060002001556103008201515115156103c0830151526020610300830151015160206103c084015101526040610300830151015160406103c084015101526001846103c0840151015260806103008301510151151560806103c0840151015233600052600960205260016040600020918254161790556103c0810151608060046040600020612ccf84511515600183016112eb565b60208401516002820155604084015160038201550191612cf4868201511515846112eb565b0151151561ff0082549160081b169061ff0019161790557f1f04bc6a40ae6639e57211d2c053ab03c575c98ae59680ea1750ff186389c0bc602083830151604051908152a1015191015260a0612d486112ad565b92600180831b03815116845260208101516020850152612d71604082015160208301519061b35d565b604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a0604051612dae81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252612e6182610d4a565b81516001600160401b038111610cac57612e7c600254610c57565b601f8111612eff575b50602092601f8211600114612eb65792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612ee75750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201612eca565b6002600052612f369060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38612e85565b60405163100960cb60e01b8152601c6004820152602490fd5b60016128a7565b600161024082015151612f6e81610bb2565b612f7781610bb2565b03612895576040610240820151015180610340830152610300820152612895565b600161022082015151612faa81610bb2565b612fb381610bb2565b036128455760406102208201510151806102e08301526102c0820152612845565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b600161280f565b60405163100960cb60e01b815260196004820152602490fd5b60016102408201515161303881610bb2565b61304181610bb2565b036127da5760406102408201510151806102a08301526102608201526127da565b61306b3361109f565b612789565b61307933610f37565b61276e565b61308f602082969493960151611282565b6007811015610bbc57600303618c465760200151608001516103e08501526130b633610ebf565b6104008501526130c533610f37565b61042085018190526103e08501515115618c4157506104008401515b6104408501526130f033610fdb565b6104608501526130ff3361109f565b61048085018190526103e08501515115618c3c57506104608401515b806104a08601525161312c81610bb2565b61313581610bb2565b618c00576104e084018051600090819052815160200181905281516040018190528151606001819052815160800152516104c08501525b600161317733610e39565b5161318181610bb2565b61318a81610bb2565b03618be75760a082015115618bce576104c0840151602081015115618bc6576040015115155b15618bad5734618b9457610440840151516131ca81610bb2565b6131d381610bb2565b618b585760006105208501525b6104a0840151516131f081610bb2565b6131f981610bb2565b618b1c5761058084018051600090819052815160200181905281516040018190528151606001819052815160800152516105608501525b610560840151602081015115618b14576040015115155b15618afb576002606083015114806105e0860152610560850151906015604083015114918261060088015260166040820151108061062089015283600014618af45760026020830151145b8015156106408a0152608087015160158103618a4a5750508151159050618a4357815b15618a115750505060035b806105c086015280156000146146ff5750610520840151610560850151516132f39190156146f75760208401519061b371565b808060011b04600214811517156146e1576001600160ff1b038116819003610b8a5760011b6106608501819052604083015110613d8f576000808080610660880151818115613d86575b3390f11561372e577f4f284e9b4175a0958f58734dfd3bca809b70a0f51a252e1292bbdab92ccf474b60206a506c617965722057696e7360a81b80610680880152604051908152a16106808401516001600160601b0319166080919091015260408101516106608401516133b09161b371565b6106a08401526103e08301515115613916573360005260066020526000600160408220828155015560086020526133ea604060002061128f565b6106c083018051600090819052815160209081018290526106e086018051839052510152515161341981610bb2565b61342281610bb2565b61390f576106e08301515161343681610bb2565b61343f81610bb2565b155b15613908576104208301515161345681610bb2565b61345f81610bb2565b155b15613901576104808301515161347681610bb2565b61347f81610bb2565b155b1561374357336000526005602052600060408120556134ec60646106a06134a66112ad565b9560018060a01b03855116875260806020860195865160208a01528383015160408a0152606081015160608a015201516080880152600160a0880152015192510461b37e565b11801560c08401524360e084015261369a5760a060405161350c81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526135bf82610d4a565b81516001600160401b038111610cac576135da600254610c57565b601f811161365d575b50602092601f82116001146136145792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106136455750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201613628565b60026000526136949060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386135e3565b90600080808093604060018060a01b038251169101519082821561373a575bf11561372e576000805560006001556136d3600254610c57565b806136db5750565b601f81116001146136ee57506000600255565b600260005261372190601f0160051c60008051602061b4018339815191520160008051602061b42183398151915261b39d565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc6136b9565b61375360646106a06134a66112ad565b11801560c08401524360e084015261369a5760a060405161377381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261382682610d4a565b81516001600160401b038111610cac57613841600254610c57565b601f81116138c4575b50602092601f821160011461387b5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106138ac5750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161388f565b60026000526138fb9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861384a565b6000613481565b6000613461565b6000613441565b33600052600760205260006001604082208281550155600960205261393e604060002061128f565b6000610700840151526000602061070085015101526000610720840151526000602061072085015101526104008301515161397881610bb2565b61398181610bb2565b613d7f576104608301515161399581610bb2565b61399e81610bb2565b155b15613d7857610700830151516139b581610bb2565b6139be81610bb2565b155b15613d7157610720830151516139d581610bb2565b6139de81610bb2565b155b15613bb35733600052600560205260006040812055613a0560646106a06134a66112ad565b11801560c08401524360e084015261369a5760a0604051613a2581610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252613ad882610d4a565b81516001600160401b038111610cac57613af3600254610c57565b601f8111613b76575b50602092601f8211600114613b2d5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613b5e5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201613b41565b6002600052613bad9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38613afc565b613bc360646106a06134a66112ad565b11801560c08401524360e084015261369a5760a0604051613be381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252613c9682610d4a565b81516001600160401b038111610cac57613cb1600254610c57565b601f8111613d34575b50602092601f8211600114613ceb5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613d1c5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201613cff565b6002600052613d6b9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38613cba565b60006139e0565b60006139c0565b60006139a0565b506108fc61333d565b7fa18dfdc78247d92d745f103a27106749c9812445e77fdb7a96a57b22b5fc4f9e60206a506c617965722057696e7360a81b80610740880152604051908152a16107408401516001600160601b031916608091909101526040810151610660840151613dfa9161b371565b6107608401526103e0830151511561427157336000526006602052600060016040822082815501556008602052613e34604060002061128f565b61078083018051600090819052815160209081018290526107a0860180518390525101525151613e6381610bb2565b613e6c81610bb2565b61426a576107a083015151613e8081610bb2565b613e8981610bb2565b155b156142635761042083015151613ea081610bb2565b613ea981610bb2565b155b1561425c5761048083015151613ec081610bb2565b613ec981610bb2565b155b1561409e5733600052600560205260006040812055613ef060646107606134a66112ad565b11801560c08401524360e084015261369a5760a0604051613f1081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252613fc382610d4a565b81516001600160401b038111610cac57613fde600254610c57565b601f8111614061575b50602092601f82116001146140185792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106140495750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161402c565b60026000526140989060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38613fe7565b6140ae60646107606134a66112ad565b11801560c08401524360e084015261369a5760a06040516140ce81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261418182610d4a565b81516001600160401b038111610cac5761419c600254610c57565b601f811161421f575b50602092601f82116001146141d65792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106142075750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016141ea565b60026000526142569060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386141a5565b6000613ecb565b6000613eab565b6000613e8b565b336000526007602052600060016040822082815501556009602052614299604060002061128f565b60006107c084015152600060206107c0850151015260006107e084015152600060206107e08501510152610400830151516142d381610bb2565b6142dc81610bb2565b6146da57610460830151516142f081610bb2565b6142f981610bb2565b155b156146d3576107c08301515161431081610bb2565b61431981610bb2565b155b156146cc576107e08301515161433081610bb2565b61433981610bb2565b155b1561450e573360005260056020526000604081205561436060646107606134a66112ad565b11801560c08401524360e084015261369a5760a060405161438081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261443382610d4a565b81516001600160401b038111610cac5761444e600254610c57565b601f81116144d1575b50602092601f82116001146144885792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106144b95750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161449c565b60026000526145089060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38614457565b61451e60646107606134a66112ad565b11801560c08401524360e084015261369a5760a060405161453e81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526145f182610d4a565b81516001600160401b038111610cac5761460c600254610c57565b601f811161468f575b50602092601f82116001146146465792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106146775750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161465a565b60026000526146c69060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38614615565b600061433b565b600061431b565b60006142fb565b634e487b7160e01b600052601160045260246000fd5b60009061b371565b9193916001810361515757507f19409c4f5c0deda47cef6b63f8509807fdab54e58fef89f716b176552e018ca960206a4465616c65722057696e7360a81b80610800860152604051908152a16108008201516001600160601b031916608091909101526103e08101515115614c5d57336000526006602052600060016040822082815501556008602052614796604060002061128f565b61082081018051600090819052815160209081018290526108408401805183905251015251516147c581610bb2565b6147ce81610bb2565b614c5657610840810151516147e281610bb2565b6147eb81610bb2565b155b15614c4f576104208101515161480281610bb2565b61480b81610bb2565b155b15614c475761048001515161482181610bb2565b61482a81610bb2565b155b15614a4457336000526005602052600060408120556148496112ad565b9160018060a01b038151168352614896606460208301928351602087015260806040820191825160408901526060810151606089015201516080870152600160a08701525192510461b37e565b11801560c08401524360e084015261369a5760a06040516148b681610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261496982610d4a565b81516001600160401b038111610cac57614984600254610c57565b601f8111614a07575b50602092601f82116001146149be5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106149ef5750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016149d2565b6002600052614a3e9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861498d565b614a4c6112ad565b9160018060a01b038151168352614a99606460208301928351602087015260806040820191825160408901526060810151606089015201516080870152600160a08701525192510461b37e565b11801560c08401524360e084015261369a5760a0604051614ab981610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252614b6c82610d4a565b81516001600160401b038111610cac57614b87600254610c57565b601f8111614c0a575b50602092601f8211600114614bc15792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614bf25750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201614bd5565b6002600052614c419060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38614b90565b50600061482c565b600061480d565b60006147ed565b336000526007602052600060016040822082815501556009602052614c85604060002061128f565b60006108608201515260006020610860830151015260006108808201515260006020610880830151015261040081015151614cbf81610bb2565b614cc881610bb2565b6151505761046081015151614cdc81610bb2565b614ce581610bb2565b155b156151495761086081015151614cfc81610bb2565b614d0581610bb2565b155b1561514157610880015151614d1b81610bb2565b614d2481610bb2565b155b15614f3e5733600052600560205260006040812055614d436112ad565b9160018060a01b038151168352614d90606460208301928351602087015260806040820191825160408901526060810151606089015201516080870152600160a08701525192510461b37e565b11801560c08401524360e084015261369a5760a0604051614db081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252614e6382610d4a565b81516001600160401b038111610cac57614e7e600254610c57565b601f8111614f01575b50602092601f8211600114614eb85792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614ee95750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201614ecc565b6002600052614f389060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38614e87565b614f466112ad565b9160018060a01b038151168352614f93606460208301928351602087015260806040820191825160408901526060810151606089015201516080870152600160a08701525192510461b37e565b11801560c08401524360e084015261369a5760a0604051614fb381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261506682610d4a565b81516001600160401b038111610cac57615081600254610c57565b601f8111615104575b50602092601f82116001146150bb5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106150ec5750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016150cf565b600260005261513b9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861508a565b506000614d26565b6000614d07565b6000614ce7565b919391600281036164515750610520840151610560850151516151859190156146f75760208401519061b371565b6108a08501819052604083015110615b065760008080806108a0880151818115615afd575b3390f11561372e577f8391082daf5c68ca19cbeb23f783c1f4ff10a3650e9682c8a129a7bc9f9ce4fc6020630a0eae6d60e31b806108c0880152604051908152a16108c08401516001600160601b0319166080919091015260408101516108a08401516152169161b371565b6108e08401526103e0830151511561568d57336000526006602052600060016040822082815501556008602052615250604060002061128f565b610900830180516000908190528151602090810182905261092086018051839052510152515161527f81610bb2565b61528881610bb2565b615686576109208301515161529c81610bb2565b6152a581610bb2565b155b1561567f57610420830151516152bc81610bb2565b6152c581610bb2565b155b1561567857610480830151516152dc81610bb2565b6152e581610bb2565b155b156154ba573360005260056020526000604081205561530c60646108e06134a66112ad565b11801560c08401524360e084015261369a5760a060405161532c81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526153df82610d4a565b81516001600160401b038111610cac576153fa600254610c57565b601f811161547d575b50602092601f82116001146154345792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106154655750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201615448565b60026000526154b49060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38615403565b6154ca60646108e06134a66112ad565b11801560c08401524360e084015261369a5760a06040516154ea81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261559d82610d4a565b81516001600160401b038111610cac576155b8600254610c57565b601f811161563b575b50602092601f82116001146155f25792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106156235750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201615606565b60026000526156729060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386155c1565b60006152e7565b60006152c7565b60006152a7565b3360005260076020526000600160408220828155015560096020526156b5604060002061128f565b600061094084015152600060206109408501510152600061096084015152600060206109608501510152610400830151516156ef81610bb2565b6156f881610bb2565b615af6576104608301515161570c81610bb2565b61571581610bb2565b155b15615aef576109408301515161572c81610bb2565b61573581610bb2565b155b15615ae8576109608301515161574c81610bb2565b61575581610bb2565b155b1561592a573360005260056020526000604081205561577c60646108e06134a66112ad565b11801560c08401524360e084015261369a5760a060405161579c81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261584f82610d4a565b81516001600160401b038111610cac5761586a600254610c57565b601f81116158ed575b50602092601f82116001146158a45792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106158d55750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016158b8565b60026000526159249060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38615873565b61593a60646108e06134a66112ad565b11801560c08401524360e084015261369a5760a060405161595a81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252615a0d82610d4a565b81516001600160401b038111610cac57615a28600254610c57565b601f8111615aab575b50602092601f8211600114615a625792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110615a935750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201615a76565b6002600052615ae29060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38615a31565b6000615757565b6000615737565b6000615717565b506108fc6151aa565b7f93cf595fa8810ccec1d3b5b3969b6e309a3c8cfc382a98437ccab5d199fe32376020630a0eae6d60e31b80610980880152604051908152a16109808401516001600160601b0319166080919091015260408101516108a0840151615b6a9161b371565b6109a08401526103e08301515115615fe157336000526006602052600060016040822082815501556008602052615ba4604060002061128f565b6109c083018051600090819052815160209081018290526109e0860180518390525101525151615bd381610bb2565b615bdc81610bb2565b615fda576109e083015151615bf081610bb2565b615bf981610bb2565b155b15615fd35761042083015151615c1081610bb2565b615c1981610bb2565b155b15615fcc5761048083015151615c3081610bb2565b615c3981610bb2565b155b15615e0e5733600052600560205260006040812055615c6060646109a06134a66112ad565b11801560c08401524360e084015261369a5760a0604051615c8081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252615d3382610d4a565b81516001600160401b038111610cac57615d4e600254610c57565b601f8111615dd1575b50602092601f8211600114615d885792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110615db95750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201615d9c565b6002600052615e089060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38615d57565b615e1e60646109a06134a66112ad565b11801560c08401524360e084015261369a5760a0604051615e3e81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252615ef182610d4a565b81516001600160401b038111610cac57615f0c600254610c57565b601f8111615f8f575b50602092601f8211600114615f465792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110615f775750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201615f5a565b6002600052615fc69060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38615f15565b6000615c3b565b6000615c1b565b6000615bfb565b336000526007602052600060016040822082815501556009602052616009604060002061128f565b6000610a008401515260006020610a0085015101526000610a208401515260006020610a2085015101526104008301515161604381610bb2565b61604c81610bb2565b61644a576104608301515161606081610bb2565b61606981610bb2565b155b1561644357610a008301515161608081610bb2565b61608981610bb2565b155b1561643c57610a20830151516160a081610bb2565b6160a981610bb2565b155b1561627e57336000526005602052600060408120556160d060646109a06134a66112ad565b11801560c08401524360e084015261369a5760a06040516160f081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526161a382610d4a565b81516001600160401b038111610cac576161be600254610c57565b601f8111616241575b50602092601f82116001146161f85792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106162295750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161620c565b60026000526162789060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386161c7565b61628e60646109a06134a66112ad565b11801560c08401524360e084015261369a5760a06040516162ae81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261636182610d4a565b81516001600160401b038111610cac5761637c600254610c57565b601f81116163ff575b50602092601f82116001146163b65792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106163e75750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016163ca565b60026000526164369060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38616385565b60006160ab565b600061608b565b600061606b565b60040361773f5761646960646105208601510461b37e565b610a408501819052604083015110616def576000808080610a40880151818115616de6575b3390f11561372e577f4a26f78dfcdaf2f390ad5925287b50db4fb85c1ee6bf01391996032d458bbf0b602068426c61636b6a61636b60b81b80610a60880152604051908152a1610a608401516001600160601b031916608091909101526040810151610a408401516164ff9161b371565b610a808401526103e0830151511561697657336000526006602052600060016040822082815501556008602052616539604060002061128f565b610aa08301805160009081905281516020908101829052610ac086018051839052510152515161656881610bb2565b61657181610bb2565b61696f57610ac08301515161658581610bb2565b61658e81610bb2565b155b1561696857610420830151516165a581610bb2565b6165ae81610bb2565b155b1561696157610480830151516165c581610bb2565b6165ce81610bb2565b155b156167a357336000526005602052600060408120556165f56064610a806134a66112ad565b11801560c08401524360e084015261369a5760a060405161661581610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526166c882610d4a565b81516001600160401b038111610cac576166e3600254610c57565b601f8111616766575b50602092601f821160011461671d5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061674e5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201616731565b600260005261679d9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386166ec565b6167b36064610a806134a66112ad565b11801560c08401524360e084015261369a5760a06040516167d381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261688682610d4a565b81516001600160401b038111610cac576168a1600254610c57565b601f8111616924575b50602092601f82116001146168db5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061690c5750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016168ef565b600260005261695b9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386168aa565b60006165d0565b60006165b0565b6000616590565b33600052600760205260006001604082208281550155600960205261699e604060002061128f565b6000610ae08401515260006020610ae085015101526000610b008401515260006020610b008501510152610400830151516169d881610bb2565b6169e181610bb2565b616ddf57610460830151516169f581610bb2565b6169fe81610bb2565b155b15616dd857610ae083015151616a1581610bb2565b616a1e81610bb2565b155b15616dd157610b0083015151616a3581610bb2565b616a3e81610bb2565b155b15616c135733600052600560205260006040812055616a656064610a806134a66112ad565b11801560c08401524360e084015261369a5760a0604051616a8581610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252616b3882610d4a565b81516001600160401b038111610cac57616b53600254610c57565b601f8111616bd6575b50602092601f8211600114616b8d5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110616bbe5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201616ba1565b6002600052616c0d9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38616b5c565b616c236064610a806134a66112ad565b11801560c08401524360e084015261369a5760a0604051616c4381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252616cf682610d4a565b81516001600160401b038111610cac57616d11600254610c57565b601f8111616d94575b50602092601f8211600114616d4b5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110616d7c5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201616d5f565b6002600052616dcb9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38616d1a565b6000616a40565b6000616a20565b6000616a00565b506108fc61648e565b7f3b6c1fa5197e674793c57a41f7b7a5479854ab45ec6aed82eaa698a365cd8476602068426c61636b6a61636b60b81b80610b20880152604051908152a1610b208401516001600160601b031916608091909101526040810151610a40840151616e589161b371565b610b408401526103e083015151156172cf57336000526006602052600060016040822082815501556008602052616e92604060002061128f565b610b608301805160009081905281516020908101829052610b80860180518390525101525151616ec181610bb2565b616eca81610bb2565b6172c857610b8083015151616ede81610bb2565b616ee781610bb2565b155b156172c15761042083015151616efe81610bb2565b616f0781610bb2565b155b156172ba5761048083015151616f1e81610bb2565b616f2781610bb2565b155b156170fc5733600052600560205260006040812055616f4e6064610b406134a66112ad565b11801560c08401524360e084015261369a5760a0604051616f6e81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261702182610d4a565b81516001600160401b038111610cac5761703c600254610c57565b601f81116170bf575b50602092601f82116001146170765792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106170a75750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161708a565b60026000526170f69060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38617045565b61710c6064610b406134a66112ad565b11801560c08401524360e084015261369a5760a060405161712c81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526171df82610d4a565b81516001600160401b038111610cac576171fa600254610c57565b601f811161727d575b50602092601f82116001146172345792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106172655750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201617248565b60026000526172b49060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38617203565b6000616f29565b6000616f09565b6000616ee9565b3360005260076020526000600160408220828155015560096020526172f7604060002061128f565b6000610ba08401515260006020610ba085015101526000610bc08401515260006020610bc085015101526104008301515161733181610bb2565b61733a81610bb2565b617738576104608301515161734e81610bb2565b61735781610bb2565b155b1561773157610ba08301515161736e81610bb2565b61737781610bb2565b155b1561772a57610bc08301515161738e81610bb2565b61739781610bb2565b155b1561756c57336000526005602052600060408120556173be6064610b406134a66112ad565b11801560c08401524360e084015261369a5760a06040516173de81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261749182610d4a565b81516001600160401b038111610cac576174ac600254610c57565b601f811161752f575b50602092601f82116001146174e65792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106175175750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016174fa565b60026000526175669060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386174b5565b61757c6064610b406134a66112ad565b11801560c08401524360e084015261369a5760a060405161759c81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261764f82610d4a565b81516001600160401b038111610cac5761766a600254610c57565b601f81116176ed575b50602092601f82116001146176a45792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106176d55750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016176b8565b60026000526177249060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38617673565b6000617399565b6000617379565b6000617359565b6040820151610520850151116180c25760008080806105208801518181156180b9575b3390f11561372e577f5a9a5c02bb6f2755b41fb622afa381148247f46898004faae449b228ec328a1f602067526574726965766560c01b80610be0880152604051908152a1610be08401516001600160601b0319166080919091015260408101516105208401516177d29161b371565b610c008401526103e08301515115617c495733600052600660205260006001604082208281550155600860205261780c604060002061128f565b610c208301805160009081905281516020908101829052610c4086018051839052510152515161783b81610bb2565b61784481610bb2565b617c4257610c408301515161785881610bb2565b61786181610bb2565b155b15617c3b576104208301515161787881610bb2565b61788181610bb2565b155b15617c34576104808301515161789881610bb2565b6178a181610bb2565b155b15617a7657336000526005602052600060408120556178c86064610c006134a66112ad565b11801560c08401524360e084015261369a5760a06040516178e881610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261799b82610d4a565b81516001600160401b038111610cac576179b6600254610c57565b601f8111617a39575b50602092601f82116001146179f05792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110617a215750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201617a04565b6002600052617a709060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386179bf565b617a866064610c006134a66112ad565b11801560c08401524360e084015261369a5760a0604051617aa681610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252617b5982610d4a565b81516001600160401b038111610cac57617b74600254610c57565b601f8111617bf7575b50602092601f8211600114617bae5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110617bdf5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201617bc2565b6002600052617c2e9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38617b7d565b60006178a3565b6000617883565b6000617863565b336000526007602052600060016040822082815501556009602052617c71604060002061128f565b6000610c608401515260006020610c6085015101526000610c808401515260006020610c80850151015261040083015151617cab81610bb2565b617cb481610bb2565b6180b25761046083015151617cc881610bb2565b617cd181610bb2565b155b156180ab57610c6083015151617ce881610bb2565b617cf181610bb2565b155b156180a457610c8083015151617d0881610bb2565b617d1181610bb2565b155b15617ee65733600052600560205260006040812055617d386064610c006134a66112ad565b11801560c08401524360e084015261369a5760a0604051617d5881610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252617e0b82610d4a565b81516001600160401b038111610cac57617e26600254610c57565b601f8111617ea9575b50602092601f8211600114617e605792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110617e915750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201617e74565b6002600052617ee09060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38617e2f565b617ef66064610c006134a66112ad565b11801560c08401524360e084015261369a5760a0604051617f1681610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252617fc982610d4a565b81516001600160401b038111610cac57617fe4600254610c57565b601f8111618067575b50602092601f821160011461801e5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061804f5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201618032565b600260005261809e9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38617fed565b6000617d13565b6000617cf3565b6000617cd3565b506108fc617762565b7febf89511358764d709da36680dbfc944f6ebf0b1b8c5afd1cd61b435a8549896602067526574726965766560c01b80610ca0880152604051908152a1610ca08401516001600160601b03191660809190910152604081015161052084015161812a9161b371565b610cc08401526103e083015151156185a157336000526006602052600060016040822082815501556008602052618164604060002061128f565b610ce08301805160009081905281516020908101829052610d0086018051839052510152515161819381610bb2565b61819c81610bb2565b61859a57610d00830151516181b081610bb2565b6181b981610bb2565b155b1561859357610420830151516181d081610bb2565b6181d981610bb2565b155b1561858c57610480830151516181f081610bb2565b6181f981610bb2565b155b156183ce57336000526005602052600060408120556182206064610cc06134a66112ad565b11801560c08401524360e084015261369a5760a060405161824081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526182f382610d4a565b81516001600160401b038111610cac5761830e600254610c57565b601f8111618391575b50602092601f82116001146183485792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106183795750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161835c565b60026000526183c89060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38618317565b6183de6064610cc06134a66112ad565b11801560c08401524360e084015261369a5760a06040516183fe81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526184b182610d4a565b81516001600160401b038111610cac576184cc600254610c57565b601f811161854f575b50602092601f82116001146185065792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106185375750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161851a565b60026000526185869060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386184d5565b60006181fb565b60006181db565b60006181bb565b3360005260076020526000600160408220828155015560096020526185c9604060002061128f565b6000610d208401515260006020610d2085015101526000610d408401515260006020610d4085015101526104008301515161860381610bb2565b61860c81610bb2565b618a0a576104608301515161862081610bb2565b61862981610bb2565b155b15618a0357610d208301515161864081610bb2565b61864981610bb2565b155b156189fc57610d408301515161866081610bb2565b61866981610bb2565b155b1561883e57336000526005602052600060408120556186906064610cc06134a66112ad565b11801560c08401524360e084015261369a5760a06040516186b081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261876382610d4a565b81516001600160401b038111610cac5761877e600254610c57565b601f8111618801575b50602092601f82116001146187b85792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106187e95750836001959610611d4f57505050811b01600255565b919260206001819286850151815501940192016187cc565b60026000526188389060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38618787565b61884e6064610cc06134a66112ad565b11801560c08401524360e084015261369a5760a060405161886e81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261892182610d4a565b81516001600160401b038111610cac5761893c600254610c57565b601f81116189bf575b50602092601f82116001146189765792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106189a75750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161898a565b60026000526189f69060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38618945565b600061866b565b600061864b565b600061862b565b6080015115618a3b575b15618a28575060056132c0565b15618a345760026132c0565b60016132c0565b506000618a1b565b60006132b5565b6080840151929550909350919015618a67575050505060016132c0565b6015821115618a9557505090600014618a8d5715618a865760046132c0565b60006132c0565b5060016132c0565b6015821015618ae9576040015180821115618ab5575050505060016132c0565b81811115618ad857505015618acc575060046132c0565b15618a345760006132c0565b14159150618a3490505760026132c0565b5050505060016132c0565b6000613292565b60405163100960cb60e01b815260216004820152602490fd5b506000613247565b60016104a085015151618b2e81610bb2565b618b3781610bb2565b036132305760406104a08501510151806105a0860152610560850152613230565b600161044085015151618b6a81610bb2565b618b7381610bb2565b036131e05760406104408501510151806105408601526105208501526131e0565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b5060006131b0565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60016104a085015151618c1281610bb2565b618c1b81610bb2565b0361316c5760406104a08501510151806105008601526104c085015261316c565b61311b565b6130e1565b618c57602082969394960151611282565b6007811015610bbc576004036193e357602060a09101510151610d60820152602084015134036193ca5733600090815260056020526040808220805462ff00ff19166001908117909155610d80840180518290528051909201929092525151618cbf81610bb2565b618cc881610bb2565b036193b157610d608101515115619045573360005260066020526040600020600160ff1982541617905560208401516001604060002001556000610da08201515260006020610da0830151015260006040610da0830151015260006060610da0830151015260006080610da083015101523360005260086020526040600020600160ff19825416179055610da081015190610da0608060046040600020618d7586511515600183016112eb565b60208601516002820155604086015160038201550193618d9b60608201511515866112eb565b015115159183549361ff0094859461ff001996879160081b16911617905560096020526040600020600160ff19825416179055015191608060046040600020618dea86511515600183016112eb565b60208601516002820155604086015160038201550193618e1060608201511515866112eb565b015115159183549260081b16911617905560008051602061b461833981519152602080850151604051908152a160a0602084015191015260a0618e516112ad565b92600180831b03815116845260208101516020850152618e7a604082015160208301519061b35d565b604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a0604051618eb781610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252618f6a82610d4a565b81516001600160401b038111610cac57618f85600254610c57565b601f8111619008575b50602092601f8211600114618fbf5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110618ff05750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201618fd3565b600260005261903f9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38618f8e565b3360005260076020526040600020600160ff1982541617905560208401516001604060002001556000610dc08201515260006020610dc0830151015260006040610dc0830151015260006060610dc0830151015260006080610dc083015101523360005260086020526040600020600160ff19825416179055610dc081015190610dc06080600460406000206190e186511515600183016112eb565b6020860151600282015560408601516003820155019361910760608201511515866112eb565b015115159183549361ff0094859461ff001996879160081b16911617905560096020526040600020600160ff1982541617905501519160806004604060002061915686511515600183016112eb565b6020860151600282015560408601516003820155019361917c60608201511515866112eb565b015115159183549260081b16911617905560008051602061b461833981519152602080850151604051908152a160a0602084015191015260a06191bd6112ad565b92600180831b038151168452602081015160208501526191e6604082015160208301519061b35d565b604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a060405161922381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526192d682610d4a565b81516001600160401b038111610cac576192f1600254610c57565b601f8111619374575b50602092601f821160011461932b5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061935c5750836001959610611d4f57505050811b01600255565b9192602060018192868501518155019401920161933f565b60026000526193ab9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b386192fa565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b6193f06020820151611282565b6007811015610bbc57600503619b84576020015160c00151610de082018190525115619b765761941f33610ebf565b610e00820152610de08101515115619b685761943a33610fdb565b610e20820152600161944b33610e39565b5161945581610bb2565b61945e81610bb2565b03619b515734619b3857610e4081610e0060c09301515161947e81610bb2565b61948781610bb2565b619afe576000828201525b610e20810151516194a281610bb2565b6194ab81610bb2565b619ac257610ea08101805160009081905281516020018190528151604001819052815160600181905281516080015251610e808201525b610de081015151156197d857610e80810151511515610ee0820151526040610de082015101516020610ee083015101526020610de082015101516040610ee083015101526060610e80820151015115156060610ee083015101526080610e80820151015115156080610ee083015101523360005260086020526040600020600160ff19825416179055610ee081015160806004604060002061958a84511515600183016112eb565b602084015160028201556040840151600382015501916195b060608201511515846112eb565b0151151561ff0082549160081b169061ff00191617905560008051602061b441833981519152602083830151604051908152a1015191015260a06195f26112ad565b92600180831b038151168452602081015160208501526040810151604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a060405161964a81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526196fd82610d4a565b81516001600160401b038111610cac57619718600254610c57565b601f811161979b575b50602092601f82116001146197525792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106197835750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201619766565b60026000526197d29060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38619721565b610e80810151511515610f00820151526040610de082015101516020610f0083015101526020610de082015101516040610f0083015101526060610e80820151015115156060610f0083015101526080610e80820151015115156080610f0083015101523360005260096020526040600020600160ff19825416179055610f0081015160806004604060002061987484511515600183016112eb565b6020840151600282015560408401516003820155019161989a60608201511515846112eb565b0151151561ff0082549160081b169061ff00191617905560008051602061b441833981519152602083830151604051908152a1015191015260a06198dc6112ad565b92600180831b038151168452602081015160208501526040810151604085015260608101516060850152608081015160808501520151151560a0830152600160c08301524360e083015260a060405161993481610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c082526199e782610d4a565b81516001600160401b038111610cac57619a02600254610c57565b601f8111619a85575b50602092601f8211600114619a3c5792819293600092611d125750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110619a6d5750836001959610611d4f57505050811b01600255565b91926020600181928685015181550194019201619a50565b6002600052619abc9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38619a0b565b6001610e2082015151619ad481610bb2565b619add81610bb2565b036194e2576040610e20820151015180610ec0830152610e808201526194e2565b6001610e0082015151619b1081610bb2565b619b1981610bb2565b03619492576040610e00820151015180610e6083015282820152619492565b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b619b713361109f565b61943a565b619b7f33610f37565b61941f565b619b95602082969493960151611282565b6007811015610bbc57600614619bad575b5050509050565b6020015160e00151610f20850152619bc433610ebf565b610f40850152619bd333610f37565b610f608501819052610f20850151511561b3015750610f408401515b80610f8086015251619c0081610bb2565b619c0981610bb2565b61b2c5576000610fa08501525b6001619c2133610e39565b51619c2b81610bb2565b619c3481610bb2565b0361b2ac57610fa084015160208301510361b293573461b27a57610f8084015151619c5e81610bb2565b619c6781610bb2565b61b23e576000610fe08501525b610fe084015160208301510361b22557610fe084015160011c80611020860152601560808401511460001461b21d57606083015160020361b1fe5760055b905b611040860182905260408401511061a80c5750600080808061102088015181811561a803575b3390f11561372e5760e06a4465616c65722057696e7360a81b8061106087015262115b9960ea1b8061108088015260016110408801511460001461a7fc57505b6001600160601b03199081166110a087018190526040519081527fb0de73c1201a04b76d1cf9c0c0ef9a1cb7705cb8d9fc52c647174b542c402dac90602090a16110a086015116910152610f20830151511561a34557336000526006602052600060016040822082815501556008602052619d98604060002061128f565b6110c083018051600090819052815160209081018290526110e0860180518390525101525151619dc781610bb2565b619dd081610bb2565b61a33e576110e083015151619de481610bb2565b619ded81610bb2565b155b1561a33757610f6083015151619e0481610bb2565b619e0d81610bb2565b155b1561a33057619e1d3361109f565b51619e2781610bb2565b619e3081610bb2565b155b1561a1445733600052600560205260006040812055619e5b60408201516110208501519061b371565b611100840152619ebc60646020611100619e736112ad565b9660018060a01b0386511688528286015183890152818101516040890152606086015160608901526080860151608089015260a0860151151560a089015201519301510461b37e565b11801560c08401524360e084015261a09b5760a0604051619edc81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c08252619f8f82610d4a565b81516001600160401b038111610cac57619faa600254610c57565b601f811161a05e575b50602092601f8211600114619ff85792819293600092619fed575b50508160011b916000199060031b1c1916176002555b80388080619ba6565b015190503880619fce565b601f19821693600260005260206000209160005b86811061a046575083600195961061a02d575b505050811b01600255619fe4565b015160001960f88460031b161c1916905538808061a01f565b9192602060018192868501518155019401920161a00c565b600260005261a0959060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b38619fb3565b90600080808093604060018060a01b038251169101519082821561a13b575bf11561372e5760008055600060015561a0d4600254610c57565b8061a0e0575b50619fe4565b601f811160011461a0f8575060006002555b3861a0da565b600260005261a12b90601f0160051c60008051602061b4018339815191520160008051602061b42183398151915261b39d565b600060208120816002555561a0f2565b506108fc61a0ba565b61a15860408201516110208501519061b371565b61112084015261a17060646020611120619e736112ad565b11801560c08401524360e084015261a09b5760a060405161a19081610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261a24382610d4a565b81516001600160401b038111610cac5761a25e600254610c57565b601f811161a2f3575b50602092601f821160011461a2a7579281929360009261a29c575b50508160011b916000199060031b1c191617600255619fe4565b01519050388061a282565b601f19821693600260005260206000209160005b86811061a2db575083600195961061a02d57505050811b01600255619fe4565b9192602060018192868501518155019401920161a2bb565b600260005261a32a9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861a267565b6000619e32565b6000619e0f565b6000619def565b33600052600760205260006001604082208281550155600960205261a36d604060002061128f565b600061114084015152600060206111408501510152600061116084015152600060206111608501510152610f408301515161a3a781610bb2565b61a3b081610bb2565b61a7f55761a3bd33610fdb565b5161a3c781610bb2565b61a3d081610bb2565b155b1561a7ee576111408301515161a3e781610bb2565b61a3f081610bb2565b155b1561a7e7576111608301515161a40781610bb2565b61a41081610bb2565b155b1561a607573360005260056020526000604081205561a43b60408201516110208501519061b371565b61118084015261a45360646020611180619e736112ad565b11801560c08401524360e084015261a09b5760a060405161a47381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261a52682610d4a565b81516001600160401b038111610cac5761a541600254610c57565b601f811161a5ca575b50602092601f821160011461a57e579281929360009261a29c5750508160011b916000199060031b1c191617600255619fe4565b601f19821693600260005260206000209160005b86811061a5b2575083600195961061a02d57505050811b01600255619fe4565b9192602060018192868501518155019401920161a592565b600260005261a6019060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861a54a565b61a61b60408201516110208501519061b371565b6111a084015261a633606460206111a0619e736112ad565b11801560c08401524360e084015261a09b5760a060405161a65381610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261a70682610d4a565b81516001600160401b038111610cac5761a721600254610c57565b601f811161a7aa575b50602092601f821160011461a75e579281929360009261a29c5750508160011b916000199060031b1c191617600255619fe4565b601f19821693600260005260206000209160005b86811061a792575083600195961061a02d57505050811b01600255619fe4565b9192602060018192868501518155019401920161a772565b600260005261a7e19060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861a72a565b600061a412565b600061a3f2565b600061a3d2565b9050619d1a565b506108fc619cda565b6a4465616c65722057696e7360a81b6111c0860181905262115b9960ea1b6111e0870181905260e09260010361b1f757505b6001600160601b031990811661120087018190526040519081527f25bef6e5e7fe57b967146ed68fa98b4e4deecff6962578320db6a39c10ac0a1d90602090a161120086015116910152610f20830151511561ad405733600052600660205260006001604082208281550155600860205261a8bc604060002061128f565b611220830180516000908190528151602090810182905261124086018051839052510152515161a8eb81610bb2565b61a8f481610bb2565b61ad39576112408301515161a90881610bb2565b61a91181610bb2565b155b1561ad3257610f608301515161a92881610bb2565b61a93181610bb2565b155b1561ad2b5761a9413361109f565b5161a94b81610bb2565b61a95481610bb2565b155b1561ab4b573360005260056020526000604081205561a97f60408201516110208501519061b371565b61126084015261a99760646020611260619e736112ad565b11801560c08401524360e084015261a09b5760a060405161a9b781610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261aa6a82610d4a565b81516001600160401b038111610cac5761aa85600254610c57565b601f811161ab0e575b50602092601f821160011461aac2579281929360009261a29c5750508160011b916000199060031b1c191617600255619fe4565b601f19821693600260005260206000209160005b86811061aaf6575083600195961061a02d57505050811b01600255619fe4565b9192602060018192868501518155019401920161aad6565b600260005261ab459060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861aa8e565b61ab5f60408201516110208501519061b371565b61128084015261ab7760646020611280619e736112ad565b11801560c08401524360e084015261a09b5760a060405161ab9781610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261ac4a82610d4a565b81516001600160401b038111610cac5761ac65600254610c57565b601f811161acee575b50602092601f821160011461aca2579281929360009261a29c5750508160011b916000199060031b1c191617600255619fe4565b601f19821693600260005260206000209160005b86811061acd6575083600195961061a02d57505050811b01600255619fe4565b9192602060018192868501518155019401920161acb6565b600260005261ad259060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861ac6e565b600061a956565b600061a933565b600061a913565b33600052600760205260006001604082208281550155600960205261ad68604060002061128f565b60006112a084015152600060206112a0850151015260006112c084015152600060206112c08501510152610f408301515161ada281610bb2565b61adab81610bb2565b61b1f05761adb833610fdb565b5161adc281610bb2565b61adcb81610bb2565b155b1561b1e9576112a08301515161ade281610bb2565b61adeb81610bb2565b155b1561b1e2576112c08301515161ae0281610bb2565b61ae0b81610bb2565b155b1561b002573360005260056020526000604081205561ae3660408201516110208501519061b371565b6112e084015261ae4e606460206112e0619e736112ad565b11801560c08401524360e084015261a09b5760a060405161ae6e81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261af2182610d4a565b81516001600160401b038111610cac5761af3c600254610c57565b601f811161afc5575b50602092601f821160011461af79579281929360009261a29c5750508160011b916000199060031b1c191617600255619fe4565b601f19821693600260005260206000209160005b86811061afad575083600195961061a02d57505050811b01600255619fe4565b9192602060018192868501518155019401920161af8d565b600260005261affc9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861af45565b61b01660408201516110208501519061b371565b61130084015261b02e60646020611300619e736112ad565b11801560c08401524360e084015261a09b5760a060405161b04e81610cdd565b600081526000602082015260006040820152600060608201526000608082015260008282015281600180821b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015201511515828201526004600055436001556040519360208501526020810151604085015260408101516060850152606081015160808501526080810151828501520151151560c083015260c0825261b10182610d4a565b81516001600160401b038111610cac5761b11c600254610c57565b601f811161b1a5575b50602092601f821160011461b159579281929360009261a29c5750508160011b916000199060031b1c191617600255619fe4565b601f19821693600260005260206000209160005b86811061b18d575083600195961061a02d57505050811b01600255619fe4565b9192602060018192868501518155019401920161b16d565b600260005261b1dc9060008051602061b401833981519152601f840160051c8101916020851061095457601f0160051c019061b39d565b3861b125565b600061ae0d565b600061aded565b600061adcd565b905061a83e565b610f208501516020015160150361b216576002619cb2565b6001619cb2565b600190619cb4565b60405163100960cb60e01b815260296004820152602490fd5b6001610f808501515161b25081610bb2565b61b25981610bb2565b03619c74576040610f80850151015180611000860152610fe0850152619c74565b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b6001610f808501515161b2d781610bb2565b61b2e081610bb2565b03619c16576040610f80850151015180610fc0860152610fa0850152619c16565b619bef565b60405163100960cb60e01b815260126004820152602490fd5b90506001541438611b3a565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b91908201918281116146e1578210610b8a57565b9081039081116146e15790565b9060fa82029180830460fa14811517156146e15760fa830403610b8a57565b81811061b3a8575050565b6000815560010161b39d565b6040519061b3c182610cf8565b8160405161b3ce81610c91565b6000815281526020610fd6611147565b6040519061b3eb82610cf8565b8161b3f4610e1a565b81526020610fd661114756fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf0a8db8025096dcd1c7a3a8c5161cef9740720358e762599d8e70d918e8e9826d5e2b01c9d2a0f948d72bc43174cd5179fa8c139c467e05e86686676d3ec8809ca164736f6c6343000811000a`,
  BytecodeLen: 47102,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:138:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:470:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:168:84:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "D": D,
  "Dealer_submitHand": Dealer_submitHand,
  "Player_buyInsurance": Player_buyInsurance,
  "Player_doubleDown": Player_doubleDown,
  "Player_getOutcome": Player_getOutcome,
  "Player_placeBet": Player_placeBet,
  "Player_submitHand": Player_submitHand,
  "Player_surrender": Player_surrender
  };
export const _APIs = {
  Dealer: {
    submitHand: Dealer_submitHand
    },
  Player: {
    buyInsurance: Player_buyInsurance,
    doubleDown: Player_doubleDown,
    getOutcome: Player_getOutcome,
    placeBet: Player_placeBet,
    submitHand: Player_submitHand,
    surrender: Player_surrender
    }
  };
