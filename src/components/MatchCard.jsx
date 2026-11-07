import React from 'react';
import { View, Pressable } from 'react-native';
import { COLORS } from '../constants/config';
import { Panel, Txt } from './ui';
import OddsPill from './OddsPill';
export default function MatchCard({ match, onPick, onOpen }) {
  const locked = match.status !== 'open' || new Date(match.kickoff_at) <= new Date();
  const options = [{ key: 'home', label: match.home_team, odds: match.odds_home }, { key: 'draw', label: 'تعادل', odds: match.odds_draw }, { key: 'away', label: match.away_team, odds: match.odds_away }];
  return <Panel><Pressable onPress={onOpen}><Txt style={{ fontFamily: 'Cairo_700Bold', fontSize: 16, textAlign: 'center' }}>{match.home_team}  ×  {match.away_team}</Txt><Txt style={{ color: COLORS.textDim, textAlign: 'center', fontSize: 11 }}>{new Date(match.kickoff_at).toLocaleString('ar-IQ')} · {match.status === 'open' ? 'مفتوحة' : match.status === 'settled' ? `انتهت ${match.home_score} - ${match.away_score}` : 'مغلقة'}</Txt></Pressable>{match.my_pick ? <Txt style={{ color: COLORS.success, textAlign: 'center' }}>توقعك مسجّل: {match.my_pick === 'home' ? match.home_team : match.my_pick === 'away' ? match.away_team : 'تعادل'}</Txt> : <View style={{ flexDirection: 'row-reverse', gap: 7 }}>{options.map((option) => <Pressable key={option.key} disabled={locked || !option.odds} onPress={() => onPick(match, option.key, option.odds)} style={{ flex: 1 }}><OddsPill value={option.odds} label={option.label} disabled={locked || !option.odds} /></Pressable>)}</View>}{!match.odds_home || !match.odds_draw || !match.odds_away ? <Txt style={{ color: COLORS.warning, textAlign: 'center', fontSize: 11 }}>بانتظار تحديد الأودز</Txt> : null}</Panel>;
}
