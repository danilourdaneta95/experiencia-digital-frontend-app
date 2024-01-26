import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  // TEXTS
  title_1: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 48,
  },
  title_2: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 48,
  },
  title_3: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 32,
  },
  title_4: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 32,
  },
  title_5: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 28,
  },
  title_6: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
  },
  body_lg: {
    fontFamily: 'Karla-Regular',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 32,
  },
  body: {
    fontFamily: 'Karla-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
  },
  body_sm: {
    fontFamily: 'Karla-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  link_lg: {
    fontFamily: 'Karla-Regular',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 32,
  },
  link: {
    fontFamily: 'Karla-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
  },
  link_sm: {
    fontFamily: 'Karla-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  text_intruductorio: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
  },
  text_cita: {
    fontFamily: 'Montserrat-Italic',
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 18,
    lineHeight: 32,
  },
  text_cita_xl: {
    fontFamily: 'Montserrat-Italic',
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 20,
    lineHeight: 32,
  },
  // COLORS
  __background: {
    backgroundColor: '#FFFFFF',
  },
  __background_dark: {
    backgroundColor: '#0B141F',
  },
  __background_2: {
    backgroundColor: '#F6F7F7',
  },
  __background_2_dark: {
    backgroundColor: '#19222E',
  },
  __surface_ghost_default: {
    backgroundColor: 'Transparent',
  },
  __surface_ghost_default_dark: {
    backgroundColor: 'Transparent',
  },
  __surface_ghost_hover: {
    backgroundColor: '#E4E8FC',
  },
  __surface_ghost_hover_dark: {
    backgroundColor: '#38424F',
  },
  __surface_ghost_active: {
    backgroundColor: '#F4F5FD',
  },
  __surface_ghost_active_dark: {
    backgroundColor: '#283341',
  },
  __surface_default: {
    backgroundColor: '#E4E8FC',
  },
  __surface_default_dark: {
    backgroundColor: '#38424F',
  },
  __surface_hover: {
    backgroundColor: '#C5CDF9',
  },
  __surface_hover_dark: {
    backgroundColor: '#283341',
  },
  __surface_active: {
    backgroundColor: '#F4F5FD',
  },
  __surface_active_dark: {
    backgroundColor: '#48515D',
  },
  __surface_strong_default: {
    backgroundColor: '#001894',
  },
  __surface_strong_default_dark: {
    backgroundColor: '#C5CDF9',
  },
  __surface_strong_hover: {
    backgroundColor: '#0024DB',
  },
  __surface_strong_hover_dark: {
    backgroundColor: '#E4E8FC',
  },
  __surface_strong_active: {
    backgroundColor: '#001894',
  },
  __surface_strong_active_dark: {
    backgroundColor: '#C5CDF9',
  },
  __surface_disabled: {
    backgroundColor: '#F6F7F7',
  },
  __surface_disabled_dark: {
    backgroundColor: '#283341',
  },
  // BORDERS
  __border_strong: {
    borderColor: '#888E96',
  },
  __border_strong_dark: {
    borderColor: '#888E96',
  },
  __border: {
    borderColor: '#C3C5CA',
  },
  __border_dark: {
    borderColor: '#C3C5CA',
  },
  __border_subtle: {
    borderColor: '#D4D6D9',
  },
  __border_subtle_dark: {
    borderColor: '#283341',
  },
  __border_interactive: {
    borderColor: '#001894',
  },
  __border_interactive_dark: {
    borderColor: '#93A3F7',
  },
  __border_interactive_subtle: {
    borderColor: '#C5CDF9',
  },
  __border_interactive_subtle_dark: {
    borderColor: '#888E96',
  },
  __border_disabled: {
    borderColor: '#C3C5CA',
  },
  __border_disabled_dark: {
    borderColor: '#58616E',
  },
  // TEXTS
  __text_strong: {
    color: '#0B141F',
  },
  __text_strong_dark: {
    color: '#DFE0E3',
  },
  __text_subtle: {
    color: '#58616E',
  },
  __text_subtle_dark: {
    color: '#C3C5CA',
  },
  __text_inverse: {
    color: '#FFFFFF',
  },
  __text_inverse_dark: {
    color: '#0B141F',
  },
  // LINKS
  __link: {
    color: '#001894',
  },
  __link_dark: {
    color: '#E4E8FC',
  },
  __link_hover: {
    color: '#0024DB',
  },
  __link_hover_dark: {
    color: '#93A3F7',
  },
  __link_visited: {
    color: '#5E77F8',
  },
  __link_visited_dark: {
    color: '#5E77F8',
  },
  // TEXT INTERACTIVE
  __text_interactive: {
    color: '#001894',
  },
  __text_interactive_dark: {
    color: '#E4E8FC',
  },
  __text_interactive_hover: {
    color: '#0024DB',
  },
  __text_interactive_hover_dark: {
    color: '#93A3F7',
  },
  __text_interactive_active: {
    color: '#001EB8',
  },
  __text_interactive_active_dark: {
    color: '#C5CDF9',
  },
  __text_interactive_subtle: {
    color: '#58616E',
  },
  __text_interactive_subtle_dark: {
    color: '#C3C5CA',
  },
  __text_interactive_subtle_hover: {
    color: '#001894',
  },
  __text_interactive_subtle_hover_dark: {
    color: '#93A3F7',
  },
  __text_interactive_subtle_active: {
    color: '#001EB8',
  },
  __text_interactive_subtle_active_dark: {
    color: '#C5CDF9',
  },
  __text_interactive_inverse: {
    color: '#E4E8FC',
  },
  __text_interactive_inverse_dark: {
    color: '#001EB8',
  },
  __text_interactive_inverse_hover: {
    color: '#F4F5FD',
  },
  __text_interactive_inverse_hover_dark: {
    color: '#0024DB',
  },
  __text_interactive_inverse_active: {
    color: '#E4E8FC',
  },
  __text_interactive_inverse_active_dark: {
    color: '#001EB8',
  },
  __text_disabled: {
    color: '#C3C5CA',
  },
  __text_disabled_dark: {
    color: '#58616E',
  },
  // BUTTONS
  __button_primary: {
    backgroundColor: '#001894',
  },
  __button_primary_dark: {
    backgroundColor: '#C5CDF9',
  },
  __button_primary_hover: {
    backgroundColor: '#0024DB',
  },
  __button_primary_hover_dark: {
    backgroundColor: '#93A3F7',
  },
  __button_primary_active: {
    backgroundColor: '#001EB8',
  },
  __button_primary_active_dark: {
    backgroundColor: '#E4E8FC',
  },
  __button_secondary: {
    backgroundColor: '#E4E8FC',
  },
  __button_secondary_dark: {
    backgroundColor: '#38424F',
  },
  __button_secondary_hover: {
    backgroundColor: '#C5CDF9',
  },
  __button_secondary_hover_dark: {
    backgroundColor: '#283341',
  },
  __button_secondary_active: {
    backgroundColor: '#F4F5FD',
  },
  __button_secondary_active_dark: {
    backgroundColor: '#48515D',
  },
  // ICONS
  __icon_strong: {
    color: '#0B141F',
  },
  __icon_strong_dark: {
    color: '#DFE0E3',
  },
  __icon_subtle: {
    color: '#58616E',
  },
  __icon_subtle_dark: {
    color: '#C3C5CA',
  },
  __icon_decorativo: {
    color: '#5AA5A5',
  },
  __icon_decorativo_dark: {
    color: '#8EBFBF',
  },
  __icon_inverse: {
    color: '#FFFFFF',
  },
  __icon_inverse_dark: {
    color: '#0B141F',
  },
  // FOCUS
  __focus: {
    color: '#001EB8',
  },
  __focus_dark: {
    color: '#E4E8FC',
  },
  __focus_inverse: {
    color: '#E4E8FC',
  },
  __focus_inverse_dark: {
    color: '#001EB8',
  },
  // FEEDBACK
  __text_info: {
    color: '#00628D',
  },
  __text_info_dark: {
    color: '#BEDBEE',
  },
  __text_info_strong: {
    color: '#002B41',
  },
  __text_info_strong_dark: {
    color: '#BEDBEE',
  },
  __text_success: {
    color: '#007350',
  },
  __text_success_dark: {
    color: '#57CF98',
  },
  __text_success_strong: {
    color: '#004438',
  },
  __text_success_strong_dark: {
    color: '#57CF98',
  },
  __text_warning: {
    color: '#836100',
  },
  __text_warning_dark: {
    color: '#F4CB00',
  },
  __text_warning_strong: {
    color: '#452C00',
  },
  __text_warning_strong_dark: {
    color: '#F4CB00',
  },
  __text_error: {
    color: '#9D0000',
  },
  __text_error_dark: {
    color: '#E7978A',
  },
  __text_error_strong: {
    color: '#450000',
  },
  __text_error_strong_dark: {
    color: '#E7978A',
  },
  __surface_info: {
    backgroundColor: '#E1EEF8',
  },
  __surface_info_dark: {
    backgroundColor: '#002B41',
  },
  __surface_info_strong: {
    backgroundColor: '#0073A0',
  },
  __surface_info_strong_dark: {
    backgroundColor: '#002B41',
  },
  __surface_success: {
    backgroundColor: '#E1F9EE',
  },
  __surface_success_dark: {
    backgroundColor: '#004438',
  },
  __surface_success_strong: {
    backgroundColor: '#00A85C',
  },
  __surface_success_strong_dark: {
    color: '#004438',
  },
  __surface_warning: {
    backgroundColor: '#FFFFBE',
  },
  __surface_warning_dark: {
    backgroundColor: '#452C00',
  },
  __surface_warning_strong: {
    backgroundColor: '#F4CB00',
  },
  __surface_warning_strong_dark: {
    backgroundColor: '#452C00',
  },
  __surface_error: {
    backgroundColor: '#FAE4E1',
  },
  __surface_error_dark: {
    backgroundColor: '#450000',
  },
  __surface_error_strong: {
    backgroundColor: '#B22000',
  },
  __surface_error_strong_dark: {
    backgroundColor: '#450000',
  },
  __surface_neutral: {
    backgroundColor: '#DFE0E3',
  },
  __surface_neutral_dark: {
    backgroundColor: '#38424F',
  },
  __elevation_1_dark: {
    backgroundColor: '#202A37',
  },
  __elevation_2_dark: {
    backgroundColor: '#242F3C',
  },
  // BORDER RADIUS
  __border_radius_8px: {
    borderRadius: 8,
  },
  __border_radius_12px: {
    borderRadius: 12,
  },
  __border_radius_16px: {
    borderRadius: 16,
  },
  __border_radius_100p: {
    borderRadius: 100,
  },
  // BORDER WIDTH
  __border_width_1px: {
    borderWidth: 1,
  },
  __border_width_2px: {
    borderWidth: 2,
  },
  __border_width_4px: {
    borderWidth: 4,
  },
  // SHADOWS
  __shadow_elevation_1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.0,
    elevation: 1,
  },
  __shadow_elevation_2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 2,
  },
  // WIDTH
  width_100pc: {
    width: '100%',
  },
  width_90pc: {
    width: '90%',
  },
  width_75pc: {
    width: '75%',
  },
  // MARGINS
  mb_10: {
    marginBottom: 10,
  },
  mb_5: {
    marginBottom: 5,
  },
  mr_15: {
    marginRight: 15,
  },
  mv_20: {
    marginVertical: 20,
  },
  // PADDINGS

  text_strong: {
    fontWeight: 'bold',
  },

  text_normal: {
    fontWeight: 'normal',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  align_center: {
    alignItems: 'center',
  },
  text_center: {
    textAlign: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#EAECF0',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  right: {
    right: 0,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  gap6: {
    gap: 6,
  },
});

export default globalStyles;
