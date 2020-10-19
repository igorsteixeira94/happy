import React, { useCallback } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Container, Title, EmpytView } from './styles';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}
const Header: React.FC<HeaderProps> = ({
  title,
  showCancel = true,
}: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBackToOrphanagesMap = useCallback(() => {
    navigation.navigate('OrphanagesMap');
  }, []);

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Title>{title}</Title>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToOrphanagesMap}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <EmpytView />
      )}
    </Container>
  );
};

export default Header;
