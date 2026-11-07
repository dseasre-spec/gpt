import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Btn, Txt } from '../src/components/ui';
import MainBox from '../src/components/MainBox';
import BalanceBox from '../src/components/BalanceBox';
import StarBadge from '../src/components/StarBadge';
import WalletModal from '../src/components/WalletModal';
import { useAuth } from '../src/store/authStore';
export default function Home() {
  const router = useRouter(); const { user, token, signOut, setUser } = useAuth(); const [wallet, setWallet] = useState(false);
  const admin = ['deputy', 'technical_manager'].includes(user?.role);
  return <Screen><View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' }}><View style={{ flexDirection: 'row-reverse', alignItems: 'center', gap: 5 }}><Header title={`أهلاً ${user?.display_name || ''}`} subtitle="اختر وجهتك" /><StarBadge color={user?.star_color} size={19} /></View><Btn title="خروج" secondary onPress={async () => { await signOut(); router.replace('/login'); }} style={{ minHeight: 38 }} /></View><View style={{ flexDirection: 'row-reverse', gap: 10 }}><MainBox title="المسابقة" subtitle="المباريات والتوقعات" icon="🏆" onPress={() => router.push('/competition')} /><MainBox title="لوحة الصدارة" subtitle="أفضل المتنافسين" icon="🥇" color={COLORS.tilePurple} onPress={() => router.push('/leaderboard')} /></View><View style={{ flexDirection: 'row-reverse', gap: 10 }}><MainBox title="التحدي" subtitle="تحدَّ مستخدماً آخر" icon="⚔️" color={COLORS.tileBlue} onPress={() => router.push('/rivalry')} /><BalanceBox balance={user?.balance} onPress={() => setWallet(true)} /></View>{admin ? <Btn title="لوحة الإدارة" onPress={() => router.push('/admin')} /> : null}<Txt style={{ color: COLORS.textDim, textAlign: 'center', marginTop: 16 }}>فانتوم · توقعاتك تبدأ من هنا</Txt><WalletModal visible={wallet} onClose={() => setWallet(false)} user={user} token={token} onUpdated={(next) => setUser(next)} /></Screen>;
}
